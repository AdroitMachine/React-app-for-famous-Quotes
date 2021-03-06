import React, { useEffect } from 'react'
import QuoteList from '../components/quotes/QuoteList'
import LoadingSpinner from '../components/ui/LoadingSpinner'
import NoQuotesFound from '../components/quotes/NoQuotesFound'
import useHttp from '../hooks/use-http'
import { getAllQuotes } from '../lib/api'

// const DUMMY_QUOTES = [
//     { id: 'q1', author: 'Max', text: 'Learning react is fun!' },
//     { id: 'q2', author: 'Maxi', text: 'Learning node is fun!' },
//     { id: 'q1', author: 'Max', text: 'Learning javascript is fun!' },
//     { id: 'q1', author: 'Max', text: 'Learning something is fun!' },

// ]
const AllQuotes = () => {
    const { sendRequest, status, data: loadedQuotes, error } = useHttp(getAllQuotes, true);

    useEffect(() => {
        sendRequest();
    }, [sendRequest])
    if (status === 'pending') {
        return (<div className="centered">
            <LoadingSpinner />
        </div>
        )
    }

    if (error) {
        return (
            <p className="centered focused">{error}</p>
        )

    }
    if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
        return <NoQuotesFound />
    }
    return (
        // <QuoteList quotes={DUMMY_QUOTES} />
        <QuoteList quotes={loadedQuotes} />
    )
}

export default AllQuotes
