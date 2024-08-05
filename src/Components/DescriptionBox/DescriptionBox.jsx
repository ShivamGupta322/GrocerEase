import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionBox'>
      <div className="mt-7 font-bold flex justify-betwen descriptionbox-navigator">
        <div className="ml-20 bg-white border-2 border-black px-2 py-2 rounded-md descriptionbox-nav-box">Description</div>
        <div className="border-2 border-black px-2 py-2  bg-white rounded-md ml-20 border- 2 descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nulla architecto dolorum quisquam, voluptatibus, omnis itaque neque deserunt porro ipsam labore corporis quo esse ratione rem assumenda molestias repellendus asperiores sed provident iusto doloribus aspernatur fugit modi. Earum fugiat fugit adipisci nihil laudantium quasi vero?</p>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo voluptas consectetur, nesciunt, voluptates ut sapiente maiores architecto ipsa doloribus possimus fugiat provident accusantium nihil ex fuga nisi porro eaque dicta voluptatem iure nulla ipsam ea, similique odio? Placeat, ad consequuntur! Quaerat accusamus consequuntur modi quis?
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
