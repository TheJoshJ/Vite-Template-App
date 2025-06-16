const About = () => {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-6 text-primary-800">About Page</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-primary-700">Our Story</h2>
        <p className="mb-4 text-gray-700">
          This is a starter template built with React, TypeScript, Vite, TailwindCSS, 
          Tanstack React Router, and Tanstack React Query. It's designed to provide a solid 
          foundation for your next web application.
        </p>
        <p className="text-gray-700">
          Feel free to modify this template to suit your needs. The structure is organized 
          to be scalable and maintainable as your project grows.
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-primary-700">Technologies Used</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>React 19 - UI library</li>
          <li>TypeScript - Type safety</li>
          <li>Vite with SWC - Fast development and building</li>
          <li>TailwindCSS 4 - Utility-first CSS framework</li>
          <li>Tanstack React Router - Type-safe routing</li>
          <li>Tanstack React Query - Data fetching and state management</li>
        </ul>
      </div>
    </div>
  )
}

export default About 