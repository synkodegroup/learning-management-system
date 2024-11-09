// app/course/[id]/page.tsx
"use client";

import { FC, useState } from 'react';

const CoursePage: FC = () => {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  const handleOpenReviewModal = () => {
    setIsReviewModalOpen(true);
  };

  const handleCloseReviewModal = () => {
    setIsReviewModalOpen(false);
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto p-2">
      {/* Header */}
      <header className="flex justify-between items-center py-4 bg-gray-100 px-4 rounded-lg shadow">
        <h1 className="text-xl font-semibold">
          Complete Website Responsive Design: from Figma to Webflow to Website Design
        </h1>
        <div>
          <button
            onClick={handleOpenReviewModal}
            className="bg-white text-orange-500 px-4 py-2 rounded mr-2"
          >
            Write A Review
          </button>
          <button className="bg-orange-500 text-white px-4 py-2 rounded">Next Lecture</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex mt-4">
        <div className="w-3/4 pr-4">
          <div className="bg-white rounded shadow p-4 mb-4">
            {/* Embed YouTube Video with Specific Dimensions */}
            <div className="flex justify-center mb-4">
              <iframe
                width="1229"
                height="600"
                src="https://www.youtube.com/embed/jJO6S2rCIfc?si=pUZa4VJBTTZh940i"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded"
              ></iframe>
            </div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold">2. Sign up in Webflow</h2>
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, index) => (
                    <img
                      key={index}
                      src="https://placehold.co/32x32"
                      alt="User avatar"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">372 students watching</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-gray-600 text-sm mb-4">
              <span>Last updated: Oct 26, 2020</span>
              <span>Comments: 154</span>
            </div>
            <div className="border-b border-gray-200 mb-4">
              <nav className="flex space-x-4">
                <a href="#" className="py-2 text-orange-500 border-b-2 border-orange-500">Description</a>
                <a href="#" className="py-2 text-gray-600">Lectures Notes</a>
                <a href="#" className="py-2 text-gray-600">Attach File</a>
                <a href="#" className="py-2 text-gray-600">Comments</a>
              </nav>
            </div>
            <section>
              <h3 className="text-xl font-semibold mb-2">Lectures Description</h3>
              <p className="text-gray-700 mb-4">
                We cover everything you need to build your first website. From creating your first page through to uploading your website to the internet. We will also cover the basics of how to improve your website with HTML and CSS. This course is aimed at people new to web design and who have never coded before.
              </p>
              <p className="text-gray-700 mb-4">
                We'll start right at the beginning and work our way through step by step.
              </p>
            </section>
            <section className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Lecture Notes</h3>
              <p className="text-gray-700 mb-4">In eu aliquet urna. Curabitur mollis tincidunt sapien...</p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Morbi in diam nec libero sodales sollicitudin.</li>
                <li>Donec id lacus nec nisi tincidunt luctus.</li>
                <li>Donec iaculis fermentum mattis.</li>
              </ul>
              <button className="bg-orange-500 text-white px-4 py-2 rounded">Download Notes</button>
            </section>
            <section className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Attach Files (01)</h3>
              <div className="flex items-center justify-between bg-gray-100 p-4 rounded">
                <div className="flex items-center">
                  <i className="fas fa-file-pdf text-red-500 text-2xl mr-2"></i>
                  <div>
                    <p className="text-gray-700">Create account on webflow.pdf</p>
                    <p className="text-gray-500 text-sm">1.26 MB</p>
                  </div>
                </div>
                <button className="bg-orange-500 text-white px-4 py-2 rounded">Download File</button>
              </div>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-2">Comments (154)</h3>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </section>
          </div>
        </div>

        {/* Sidebar - Course Contents */}
        <aside className="w-1/4">
          <div className="bg-white rounded shadow p-4 mb-4">
            <h3 className="text-xl font-semibold mb-4">Course Contents</h3>
            <div className="mb-4">
              <h4 className="text-orange-500 font-semibold mb-2">Getting Started</h4>
              <ul className="space-y-2">
                <li className="flex items-center justify-between text-gray-700">
                  <span>1. What is Webflow?</span>
                  <span>07:31</span>
                </li>
                <li className="flex items-center justify-between text-orange-500">
                  <span>2. Sign up in Webflow</span>
                  <span>07:31</span>
                </li>
              </ul>
            </div>
            {/* Additional Course Sections */}
            <div className="mb-4">
              <h4 className="text-gray-700 font-semibold mb-2">Secret of Good Design</h4>
              <ul className="space-y-2">
                <li className="flex items-center justify-between text-gray-700">
                  <span>52 lectures</span>
                  <span>5h 4m</span>
                </li>
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="text-gray-700 font-semibold mb-2">Practice Design Like an Artist</h4>
              <ul className="space-y-2">
                <li className="flex items-center justify-between text-gray-700">
                  <span>46 lectures</span>
                  <span>5h 6m</span>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </main>

      {/* Review Modal */}
      {isReviewModalOpen && <ReviewModal onClose={handleCloseReviewModal} />}
    </div>
  );
};

// Komponen untuk modal Write a Review
type ReviewModalProps = {
  onClose: () => void;
};

const ReviewModal: FC<ReviewModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-lg font-semibold">Write a Review</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <i className="fas fa-times"></i>
          </button>
        </div>

        {/* Rating Display */}
        <div className="text-center mb-4">
          <span className="text-2xl font-semibold">4.5</span>
          <span className="text-gray-500"> (Good/Amazing)</span>
        </div>
        
        {/* Star Rating Display */}
        <div className="flex justify-center mb-4">
          <i className="fas fa-star text-orange-500 text-2xl mx-1"></i>
          <i className="fas fa-star text-orange-500 text-2xl mx-1"></i>
          <i className="fas fa-star text-orange-500 text-2xl mx-1"></i>
          <i className="fas fa-star text-orange-500 text-2xl mx-1"></i>
          <i className="fas fa-star-half-alt text-orange-500 text-2xl mx-1"></i> {/* Setengah bintang */}
        </div>

        {/* Feedback Form */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Feedback</label>
          <textarea
            className="w-full p-2 border rounded-lg"
            rows={4}
            placeholder="Write down your feedback here..."
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300"
          >
            Cancel
          </button>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
