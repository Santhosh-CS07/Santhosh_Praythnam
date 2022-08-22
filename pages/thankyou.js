import React from 'react';

const thankyou = () => {
    return (
        <div>
            <div className="bg-black-to-r from-purple-300 to-blue-200">
                <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
                        <div className="border-t border-gray-200 text-center pt-8">
                            <h2 className="text-8xl font-bold text-purple-400">Thank You!</h2>
                            <h3 className="text-6xl font-medium py-8">For connecting us!</h3>
                            <p className="text-2xl pb-8 px-12 font-medium">I will get back to you soon | welcome to Tech for your bright business future.</p>
                            <button className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-20 py-3 rounded-md mr-6">
                                <a href='/'> Home</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default thankyou