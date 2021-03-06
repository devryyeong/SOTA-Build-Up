import React, { Fragment, useState } from 'react'
import {Link} from 'react-router-dom';
import '../CSS/NavBar.css'

function NavBar() {
  return (
    <Fragment>
      <div class="header-area">
        <div class="place-tab">
          <div class="tab-inner">
            <a href="/" class="tab">
              <span class="txt">홈</span>
            </a>
            <a href="#diary" class="tab">
              <span class="txt">빌드업 소개</span>
            </a>
            <a href="/" class="tab">
              <span class="txt">회사 정책</span>
            </a>
            <a href="/" class="tab">
              <span class="txt">고객 센터</span>
            </a>
          </div>

          <div class="tab-login">
            <Link to="/login">
              <button class="login-btn">로그인</button>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default NavBar
