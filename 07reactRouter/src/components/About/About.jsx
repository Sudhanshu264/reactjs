import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                            Indeed, React development often attracts passionate developers. React is a popular JavaScript library for building user interfaces, and it was developed and is maintained by Facebook. It has gained widespread adoption in the web development community due to its component-based architecture, virtual DOM, and the ability to create reusable UI components.

                            Passionate developers are drawn to React for several reasons:

                            Declarative Syntax: React uses a declarative approach, making it easier for developers to understand and reason about the application's state and how it should behave.

                            Component-Based Architecture: React encourages a modular and reusable component-based architecture, which leads to cleaner and more maintainable code. Developers appreciate the ability to create self-contained components that can be easily composed to build complex user interfaces.


                        </p>
                        <p className="mt-4 text-gray-600">
                            Virtual DOM: React's use of a virtual DOM enables efficient updates to the actual DOM, resulting in improved performance. This is particularly important for applications with dynamic and frequently changing user interfaces.

                            Large Community and Ecosystem: React has a large and active community, with a wealth of resources, libraries, and third-party tools available. This supportive ecosystem allows developers to learn from one another, share knowledge, and contribute to open-source projects.

                            React Native: For those interested in mobile development, React Native extends the React paradigm to building cross-platform mobile applications. This allows developers to leverage their React skills to create native-like experiences for iOS and Android.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
