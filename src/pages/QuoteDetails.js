import React, { useEffect } from 'react'
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom'
import HighlightedQuote from '../components/quotes/HighlightedQuote'
import Comments from '../components/comments/Comments';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api'
import LoadingSpinner from '../components/ui/LoadingSpinner';

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Max', text: 'Learning react is fun!' },
    { id: 'q2', author: 'Maxi', text: 'Learning node is fun!' },
    { id: 'q1', author: 'Max', text: 'Learning javascript is fun!' },
    { id: 'q1', author: 'Max', text: 'Learning something is fun!' },

]

const QuoteDetails = () => {
    const match = useRouteMatch();
    const params = useParams();
    const { quoteId } = params;
    const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);

    useEffect(() => {
        sendRequest(quoteId);

    }, [sendRequest, quoteId])
    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    if (status === 'pending') {
        return (
            <div className='centered'>
                <LoadingSpinner />
            </div>
        )
    }
    if (error) {
        return (
            <p className="centered">{error}</p>
        )
    }
    if (!loadedQuote.text) {
        return <p>No Quote Found!</p>
    }
    return (
        <>
            <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
            <Route path={match.path} exact>
                <div className="centered">
                    <Link className="btn--flat" to={`${match.url}/comments`}>Load comments</Link>
                </div>
            </Route>

            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </>
    )
}

export default QuoteDetails
