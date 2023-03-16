import React from 'react';
import Navbar from './Navbar';
import Shelf from './Shelf';
import Book from './Book';
import { useAppSelector } from '../app/hooks';
import { BookType, JSONResponse, Subjects } from '../interfaces/types';
import { isOnBookshelf } from './Book';

export default function MyBooks() {
    const { booklist } = useAppSelector(state => state.bookshelf);
    const [recommendations, setRecommendations] = React.useState<JSONResponse[]>([]);
    const [subjects, setSubjects] = React.useState<Subjects>({});

    // Recommends books found on project gutenberg based on most popular subject in user books
    async function recommendBook(subject: string) {
        try{
            const response = await fetch(`http://gutendex.com/books?topic=${subject}`, {
                mode: 'cors'
            });
            let searchdata = await response.json();
            let bookRecs = [];
            for (let i = 0; i < 8; i++) {
                if(!isOnBookshelf(booklist, searchdata.results[i]))
                bookRecs.push(searchdata.results[i]);
            }
            setRecommendations(bookRecs);
        } catch (error) {
            alert("Error!");
        }
    
    }

    // Returns most popular subject based on books on shelf
    function sortTopics(): string {
        let topicList: Subjects = {};
        const subjectArrayList = booklist.map((book) => {
            return book.subjects;
        })
        const subjectArray = [];
        for (let i = 0; i < subjectArrayList.length; i++) {
            for (let j = 0; j < subjectArrayList[i].length; j++) {
                subjectArray.push(subjectArrayList[i][j]);
            }
        };
        subjectArray.map((subject) => {
            topicList[subject] ? topicList[subject] += 1: topicList[subject] = 1;
        });
        return (Object.keys(topicList).sort((a,b) => topicList[b] - topicList[a]))[0];
    }

    function getRecommendations() {
        recommendBook(sortTopics());

    }

    const recommendedbooks = recommendations.map(book => {
        return (
            <Book title={book.title} author={book.authors[0] ? book.authors[0].name : 'Unknown'} id={book.id} subjects={book.subjects}/>
    )});


    return (
        <div>
            <Navbar page='My Books' />
            <h3>Your Books:</h3>
            <Shelf booklist={booklist} />
            <h3>Recommended Books:</h3>
            <ul style={{listStyle: 'none',display:'flex', justifyContent:'flex-start', flexWrap: 'wrap' }}>
                {recommendedbooks}
            </ul>
            <button type='button' onClick={() => getRecommendations()}>Get Recommendations</button>
        </div>
    )
}