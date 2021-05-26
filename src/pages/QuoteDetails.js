import React from 'react'
import { useParams, Route } from 'react-router-dom'
import HighlightedQuote from '../components/quotes/HighlightedQuote'
import Comments from '../components/comments/Comments';

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Max', text: 'Learning react is fun!' },
    { id: 'q2', author: 'Maxi', text: 'Learning node is fun!' },
    { id: 'q1', author: 'Max', text: 'Learning javascript is fun!' },
    { id: 'q1', author: 'Max', text: 'Learning something is fun!' },

]

const QuoteDetails = () => {
    const params = useParams();
    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);
    if (!quote) {
        return <p>No Quote Found!</p>
    }
    return (
        <>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </>
    )
}

export default QuoteDetails
