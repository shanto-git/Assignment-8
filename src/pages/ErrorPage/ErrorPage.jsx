import React from 'react';

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center gap-4'>
            <img src="/public/error-404.png" alt="" />
            <h1 className='text-5xl font-bold'>Oops, page not found!</h1>
            <p className='text-xl text-gray-500'>The page you are looking for is not available.</p>
            <button className='btn bg-linear-to-l from-indigo-500 to-indigo-700 text-white '>Go Back!</button>
        </div>
    );
};

export default ErrorPage;