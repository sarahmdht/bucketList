// import React from 'react'

const Home = () => {
  return (
    <div className='d-flex justify-content-between align-content-center h-100 w-100'>
      {/* left side  */}
      <div className="d-flex flex-column justify-content-center align-items-center w-50" style={{ height: '100vh' }}>
        <img src="./images/878468f6aa5661008263224fa6a44ba9.png" alt='Success' width={250} height={250} />
        <div className='mt-5'>
          <h2>Start planning your day:</h2>
          <input type="text" class="form-control" placeholder="What is in your mind today?" name="start" />
          <button type='button' className='btn btn-success mt-3 rounded-pill'>Let's Start!</button>
        </div>
      </div>
      {/* right side  */}
      <div className="d-flex justify-content-center align-items-center bg-primary-subtle w-50" style={{ height: '100vh' }}>
        <div className="p-3 text-center rounded">
          <h2 className="text-success fw-bold display-5 pb-2">
            Quote of the Day
          </h2>
          <blockquote className="blockquote text-dark p-5">
            <p><span className="text-success h2">“</span>Give me six hours to chop down a tree and I will spend the first four sharpening the axe.<span className="text-success h2">”</span></p>
            <footer className="blockquote-footer text-success d-flex justify-content-end">Abraham Lincoln</footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Home;