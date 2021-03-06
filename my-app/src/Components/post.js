'use strict';
import React, { Component } from 'react';
import ReactSVG from 'react-svg'

function PostInfo(props) {
  return (
    <div className="post__author author vcard inline-items">
      <img src="img/avatar3-sm.jpg" alt="author" />
      <div className="author-date">
        <a className="h6 post__author-name fn" href="#">Sarah Hetfield</a>
        <div className="post__date">
          <time className="published" dateTime="2004-07-24T18:18">
            March 2 at 9:06am
            </time>
        </div>
      </div>
    </div>
  )
}

function PostContent(props) {
  return (
    <div>
      <a href="#" data-target="#post-view-photo" data-toggle="modal">
        <img className="rounded float-left" src="./img/last-photo8.jpg" alt="Pic Loading Failed" />
      </a>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
      </p>
    </div>
  )
}

function PostBottom(props) {
  return (
    <div className="post-additional-info inline-items">
      <a href="#" className="post-add-icon inline-items">
        <ReactSVG src="./icons/icons.svg#olymp-heart-icon" />
        <span>0 Likes</span>
      </a>
      <div className="comments-shared">
        <a data-toggle="collapse" href="#Comments" className="post-add-icon inline-items" role="button" aria-expanded="false" aria-controls="Comments">
          <ReactSVG src="./icons/icons.svg#olymp-speech-balloon-icon" />
          <span>0 Comments</span>
        </a>
        <a href="#" className="post-add-icon inline-items">
          <ReactSVG src="./icons/icons.svg#olymp-share-icon" />
          <span>2 Shares</span>
        </a>
      </div>
    </div>
  )
}

function PostSideButton(props) {
  return (
    <div className="control-block-button post-control-button">
      <a href="#" className="btn btn-control">
        <ReactSVG src="./icons/icons.svg#olymp-like-post-icon" svgClassName="olymp-like-post-icon" evalScripts="always" />
      </a>
      <a href="#" className="btn btn-control">
        <ReactSVG src="./icons/icons.svg#olymp-comments-post-icon" />
      </a>
      <a href="#" className="btn btn-control">
        <ReactSVG src="./icons/icons.svg#olymp-share-icon" />
      </a>
    </div>
  )
}

function CommentList(props) {
  return (
    <ul className="comments-list">
      <li>
        <div className="post__author author vcard inline-items">
          <img alt="author" src="img/author-page.jpg" />
          <div className="author-date">
            <a className="h6 post__author-name fn" href="02-ProfilePage.html">James Spiegel</a>
            <div className="post__date">
              <time className="published" dateTime="2004-07-24T18:18">
                38 mins ago
          </time>
            </div>
          </div>
          <a className="more" href="#"><svg xmlns="http://www.w3.org/2000/svg" className="olymp-three-dots-icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="icons/icons.svg#olymp-three-dots-icon" /></svg></a>
        </div>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium der doloremque laudantium.</p>
        <a className="post-add-icon inline-items" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" className="olymp-heart-icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="icons/icons.svg#olymp-heart-icon" /></svg>
          <span>3</span>
        </a>
        <a className="reply" href="#">Reply</a>
      </li>
      <li>
        <div className="post__author author vcard inline-items">
          <img alt="author" src="img/avatar1-sm.jpg" />
          <div className="author-date">
            <a className="h6 post__author-name fn" href="#">Mathilda Brinker</a>
            <div className="post__date">
              <time className="published" dateTime="2004-07-24T18:18">
                1 hour ago
          </time>
            </div>
          </div>
          <a className="more" href="#"><svg xmlns="http://www.w3.org/2000/svg" className="olymp-three-dots-icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="icons/icons.svg#olymp-three-dots-icon" /></svg></a>
        </div>
        <p>Ratione voluptatem sequi en lod nesciunt. Neque porro quisquam est, quinder dolorem ipsum
          quia dolor sit amet, consectetur adipisci velit en lorem ipsum duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
    </p>
        <a className="post-add-icon inline-items" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" className="olymp-heart-icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="icons/icons.svg#olymp-heart-icon" /></svg>
          <span>8</span>
        </a>
        <a className="reply" href="#">Reply</a>
      </li>
    </ul>
  )
}

function MoreComment(props) {
  return (
    <a className="more-comments" href="#">View more comments <span>+</span></a>
  )
}

function CommentForm(props) {
  return (
    <form className="comment-form inline-items">
      <div className="post__author author vcard inline-items">
        <img alt="author" src="img/author-page.jpg" />
        <div className="form-group with-icon-right is-empty">
          <textarea className="form-control" placeholder defaultValue={""} />
          <div className="add-options-message">
            <a className="options-message" href="#" data-toggle="modal" data-target="#update-header-photo">
              <svg xmlns="http://www.w3.org/2000/svg" className="olymp-camera-icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="icons/icons.svg#olymp-camera-icon" /></svg>
            </a>
          </div>
          <span className="material-input" /></div>
      </div>
    </form>
  )
}

class Post extends Component {
  render() {
    return (
      <div className="ui-block">
        <article className="hentry post has-post-thumbnail">
          <PostInfo />
          <PostContent />
          <PostBottom />
          <PostSideButton />
          <br />
          <div className="collapse" id="Comments">
            <CommentList />
            <MoreComment />
            <CommentForm />
          </div>
        </article>
      </div>
    );
  }
}

export default Post;
