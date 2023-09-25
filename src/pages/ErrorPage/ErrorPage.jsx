import React from 'react';

const ErrorPage = () => {
    return (
        <div>
            <div className=' text-center h-[300px] w-[500px] mx-auto mt-40'>
                <h1 className='text-4xl text-red-600 font-bold'>Oops!</h1>
                <p className='text-4xl text-red-600 font-bold'>Sorry, an unexpected error has occurred.</p>
            </div>
        </div>
    );
};

export default ErrorPage;