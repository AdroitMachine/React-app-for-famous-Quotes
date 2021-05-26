import React from 'react'
import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Max', text: 'Learning react is fun!' },
    { id: 'q2', author: 'Maxi', text: 'Learning node is fun!' },
    { id: 'q1', author: 'Max', text: 'Learning javascript is fun!' },
    { id: 'q1', author: 'Max', text: 'Learning something is fun!' },

]
const AllQuotes = () => {
    return (
        <QuoteList quotes={DUMMY_QUOTES} />
    )
}

export default AllQuotes
