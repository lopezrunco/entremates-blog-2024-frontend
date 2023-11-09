import { createGlobalStyle } from 'styled-components';

// Variables ---------------------------------------------------------------------

const primaryColor = '#60740a';
const secondaryColor = '#dbc500';
const primaryDark = '#394506';
const blackColor = '#252525';
const footerColor = '#1e1e1e';
const lightColor = '#ececec';
const grayColor = '#ccc';
const dangerColor = '#ce0000';
const baseFont = 'Poppins';

// Globals ---------------------------------------------------------------------

const GlobalStyles = createGlobalStyle`
html,
body,
div,
span,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
abbr,
address,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
samp,
small,
strong,
sub,
sup,
var,
b,
i,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}

body {
  line-height: 1;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

nav ul,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

a {
  margin: 0;
  padding: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
  text-decoration: none;
  transition: .15s ease-in-out all;
}

a:hover,
a:active {
  text-decoration: none;
}

ins {
  background-color: #ff9;
  color: #000;
  text-decoration: none;
}

mark {
  background-color: #ff9;
  color: #000;
  font-style: italic;
  font-weight: bold;
}

del {
  text-decoration: line-through;
}

abbr[title],
dfn[title] {
  border-bottom: 1px dotted;
  cursor: help;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

input,
select {
  vertical-align: middle;
}

*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

::selection {
  background: ${grayColor};
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: ${baseFont};
  background-color: ${lightColor};
  color: ${blackColor};
  font-size: 1rem;
  line-height: 1.6rem;
}

#main-wrapper {
  position: relative;
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  min-height: 100%;
  overflow: hidden;
}

.content-wrap {
  width: 95%;
  max-width: 1140px;
  margin: 0 auto;
  float: none !important;
}

.main-logo {
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  text-indent: -9999em;
}

.overlay,
.overlay-top {
  width: 100%;
  height: 100%;
  padding: 15px;
  background: black;
  transition: ease-in-out 0.2s;
}

.overlay {
  background: radial-gradient(circle, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.4) 100%);
}

.overlay-top {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%);
}

.grid {
  display: grid;
}

.flex {
  display: flex;
}

header,
main,
section,
article,
footer {
  position: relative;
}

section {
  padding: 60px 0;
  overflow: hidden;
}

.title {
  margin-bottom: 30px;
  text-align: center;
}

h2,
h3,
h4,
h5,
h6 {
  font-weight: 700;
  margin-bottom: 15px;
}

.video-section,
.magazine-release {
  background: #323914;
  background: linear-gradient(32deg, #323914 0%, #404916 57%);
  color: ${lightColor};
}

.light-img-bg {
  background-color: ${lightColor};
}

@media screen and (min-width: 768px) {
  .light-img-bg {
    background-image: url(https://res.cloudinary.com/dcqvlh8mo/image/upload/f_auto,q_auto/ebbdoxsfmafuouc1dhnz);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }
}
h2 {
  font-size: 1.5rem;
}

h3 {
  font-size: 1.4rem;
}

h4 {
  font-size: 1.2rem;
}

h5 {
  font-size: 1.1rem;
}

h6 {
  font-size: 1.05rem;
}

p {
  line-height: 1.3rem;
}

a {
  text-decoration: none;
  color: ${lightColor};
  font-weight: 600;
}

small {
  font-size: 0.8rem;
}

.about a {
  color: ${primaryColor};
}

.magazine-release a {
  color: ${secondaryColor};
}

.date {
  font-size: 0.8rem;
  font-weight: 300;
}

hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 3px solid ${secondaryColor};
  margin: 0 auto;
  padding: 10px;
  width: 30px;
}

.primary-color {
  color: ${primaryColor};
}

.secondary-color {
  color: ${secondaryColor};
}

.danger {
  color: ${dangerColor};
}

.bold-700 {
  font-weight: 700;
}

.btn {
  display: inline-block;
  padding: 5px 15px;
  margin: 10px 0;
  text-transform: uppercase;
  border-radius: 2px;
}

.btn-medium {
  font-size: 1rem;
}

.btn-small {
  font-size: 0.8rem;
}

.btn-default {
  background-color: ${primaryColor};
  color: ${lightColor};
}

.btn-outline {
  border: 1px solid ${primaryColor};
  color: ${primaryColor};
}

.category {
  display: inline-block;
  background: ${primaryColor};
  color: ${lightColor};
  padding: 0px 5px 0 0;
  margin-bottom: 10px;
  font-size: 0.6em;
  font-weight: 400;
  text-transform: uppercase;
}

.category::before {
  content: "";
  position: relative;
  z-index: 0;
  border-top: 8px solid ${primaryColor};
  border-right: 8px solid transparent;
  bottom: -25px;
  left: 0px;
}

.pagination {
  margin: 30px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
}
.pagination a {
  display: flex;
  align-items: center;
  background-color: ${primaryColor};
  color: ${lightColor};
  padding: 10px 25px;
  border-radius: 50px;
  font-weight: 400;
  transition: ease-in-out 0.2s;
}
.pagination a:hover {
  background-color: ${primaryDark};
}
.pagination a.disabled {
  opacity: 0.6;
}
.pagination a .icon {
  font-size: 1.5rem;
}

.bg-icon {
  position: absolute;
  top: 40%;
  left: 0%;
  z-index: 1;
  font-size: 30rem;
  opacity: 0.08;
  color: ${primaryColor};
}

@media screen and (min-width: 768px) {
  .bg-icon {
    top: 0%;
    left: 40%;
  }
}
@media screen and (min-width: 1024px) {
  section {
    padding: 80px 0;
  }
}
@media screen and (min-width: 1200px) {
  .bg-icon {
    left: 60%;
  }
}
.bd-grid {
  max-width: 1024px;
  display: grid;
  grid-template-columns: 100%;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}

// Header ---------------------------------------------------------------------
header {
  width: 100%;
  height: 3rem;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 1.5rem;
  background-color: #1e2306b3;
  z-index: 100;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
}

.header-toggle {
  font-size: 1.5rem;
  color: ${lightColor};
  cursor: pointer;
}

// Nav ---------------------------------------------------------------------
@media screen and (max-width: 768px) {
  .nav {
    position: fixed;
    top: 0;
    left: -100%;
    background: ${blackColor};
    background: linear-gradient(32deg, ${blackColor} 0%, #282b19fa 62%, #363d15 100%);
    color: ${lightColor};
    width: 100%;
    height: 100vh;
    padding: 1.5rem 0;
    z-index: 100;
    transition: 0.5s;
  }
}
.nav-content {
  height: 100%;
  grid-template-columns: 1fr;
  row-gap: 2rem;
}

.nav-close {
  position: absolute;
  right: 1.5rem;
  font-size: 2rem;
  padding: 0.25rem;
  background-color: #262e04;
  border-radius: 50%;
  cursor: pointer;
}

.nav-menu {
  align-self: center;
  justify-self: center;
  text-align: center;
  text-transform: capitalize;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.nav-menu .social-list {
  font-size: 2.5rem;
}
.nav-menu .social-list a {
  margin: 0 5px;
  color: #ffffffa1;
}

.nav-item {
  margin: 1rem 0;
}

.nav-link {
  color: ${lightColor};
}

.show {
  left: 0;
}

.active {
  color: ${primaryColor};
}

@media screen and (min-width: 769px) {
  .header {
    height: 4rem;
  }

  .header-toggle {
    display: none;
  }

  .nav {
    width: 100%;
  }

  .nav-content {
    grid-template-rows: 1fr;
    column-gap: 1rem;
    justify-content: space-between;
  }

  .nav-menu {
    text-transform: uppercase;
    font-size: 1rem;
  }

  .nav-close {
    display: none;
  }

  .nav-list {
    display: flex;
    justify-content: center;
  }

  .nav-item {
    margin: 0 0.25rem;
  }

  .nav-link {
    padding: 0.5rem 0.8rem;
    border-radius: 0.25rem;
    transition: ease-in-out 0.2s;
  }

  .nav-link:hover {
    background-color: ${blackColor};
  }

  .active {
    background-color: ${blackColor};
    color: ${lightColor};
  }

  .social-list {
    display: none;
  }
}
@media screen and (min-width: 1024px) {
  .bd-grid {
    margin: 0 auto;
  }
}

// Go to top button ---------------------------------------------------------------------
#goToTop {
  display: none;
  /* Hidden by default */
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 99;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${primaryColor};
  font-size: 2.6rem;
  transition: ease-in-out 0.25s;
  opacity: 0.7;
}
#goToTop:hover {
  color: #4d5d08;
}

// Home img ---------------------------------------------------------------------
.home-img {
  width: 100%;
  height: 100vh;
  background-image: url(https://res.cloudinary.com/dcqvlh8mo/image/upload/f_auto,q_auto/b2azrjossrfvuwp4blvd);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  padding: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 50px;
  animation: slide 1s ease;
}
.home-img picture {
  opacity: 0;
  animation: captionText 1s ease forwards;
}
.home-img .page-title {
  color: ${lightColor};
}
.home-img .page-title h2 {
  text-shadow: 3px 3px 10px ${blackColor};
}
.home-img .page-title .breadcrumbs {
  background-color: #0000005c;
  padding: 15px 30px;
  border-radius: 5px;
}
.home-img .page-title .breadcrumbs p {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  flex-wrap: wrap;
  justify-content: center;
}
.home-img .page-title .breadcrumbs p .icon {
  font-size: 1.3rem;
  color: ${secondaryColor};
}

@keyframes slide {
  0% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes captionText {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
@media screen and (min-width: 768px) {
  .home-img {
    background-image: url(https://res.cloudinary.com/dcqvlh8mo/image/upload/f_auto,q_auto/evkbggrpt3m4wv8x3l2u);
    height: 50vh;
    animation: none;
  }

  .home-img.magazine {
    background-image: url(https://res.cloudinary.com/dcqvlh8mo/image/upload/f_auto,q_auto/lpj6jxfn2evnxmi22bsx);
  }

  .home-img.contact {
    background-image: url(https://res.cloudinary.com/dcqvlh8mo/image/upload/f_auto,q_auto/c59ybusajcaxjzw3ngtg);
  }

  .home-img.news {
    background-image: url(https://res.cloudinary.com/dcqvlh8mo/image/upload/f_auto,q_auto/ohmrq1g6hvgoro07vmz5);
  }
}

// About ---------------------------------------------------------------------
.about {
  text-align: center;
  background-position: center bottom;
}
.about .grid {
  grid-template-columns: 1fr;
  gap: 30px;
}

@media screen and (min-width: 1024px) {
  .about .grid {
    width: 80%;
    margin: 0 auto;
  }
}
.video-section {
  text-align: center;
}
.video-section .grid {
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 200px);
  gap: 15px;
}
.video-section .grid .item {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.video-section .grid .item .overlay {
  padding: 30px;
}
.video-section .grid .item .overlay .flex {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.video-section .grid .item .overlay .flex p {
  font-weight: 400;
}

@media screen and (min-width: 768px) {
  .video-section .grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(1, 200px);
  }
}
@media screen and (min-width: 1024px) {
  .video-section .grid {
    grid-template-rows: repeat(1, 270px);
  }
  .video-section .grid .item .overlay {
    opacity: 0;
    transition: ease-in-out 0.2s;
  }
  .video-section .grid .item .overlay:hover {
    opacity: 1;
  }
}

// News ---------------------------------------------------------------------
.news {
  text-align: center;
}
.news .grid {
  text-align: left;
}
.news .grid a:hover,
.news .grid a:active {
  color: ${lightColor};
}
.news .grid-1 {
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 200px);
  gap: 15px;
}
.news .grid-1 .item {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.news .grid-1 .item h4 {
  margin-bottom: 2px;
}

@media screen and (min-width: 768px) {
  .news .grid-1 {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 250px);
  }
  .news .grid-1 .item:nth-child(1) {
    grid-column: 1/3;
  }
}
@media screen and (min-width: 1024px) {
  .news .item {
    transition: ease-in-out 0.2s;
  }
  .news .item:hover .overlay-top {
    padding: 40px 15px;
  }
}
@media screen and (min-width: 1200px) {
  .news .grid-1 {
    grid-template-rows: repeat(3, 300px);
  }
}
@media screen and (min-width: 1400px) {
  .news .grid-1 {
    grid-template-rows: repeat(2, 300px);
    grid-template-columns: repeat(4, 1fr);
  }
  .news .grid-1 .item:nth-child(1) {
    grid-column: 1/3;
    grid-row: 1/3;
  }
}
.news .grid-2 {
  grid-template-columns: repeat(1, 1fr);
  gap: 15px;
}
.news .grid-2 .item {
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 250px;
}

@media screen and (min-width: 768px) {
  .news .grid-2 {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
  .news .grid-2 .item:nth-child(1) {
    grid-column: 1/3;
  }
}
@media screen and (min-width: 1024px) {
  .news .grid-2 item {
    min-height: 300px;
  }
}
@media screen and (min-width: 1200px) {
  .news .grid-2 {
    grid-template-columns: repeat(3, 1fr);
  }
  .news .grid-2 .item:nth-child(1) {
    grid-column: 1/2;
  }
}

// Single blog ---------------------------------------------------------------------
.article-single {
  text-align: left;
}
.article-single .grid {
  grid-template-columns: 1fr;
  gap: 15px;
}
.article-single .grid .main-content {
  margin-bottom: 30px;
}
.article-single .grid .main-content .img-wrapper {
  width: 100%;
  overflow: hidden;
  margin-bottom: 15px;
}
.article-single .grid .main-content .img-wrapper img {
  width: 100%;
  height: auto;
}
.article-single .grid .main-content .article-content p,
.article-single .grid .main-content .article-content img {
  margin-bottom: 15px;
}
.article-single .grid .main-content .article-content img {
  margin-right: 15px;
}
.article-single .grid .secondary-content {
  border-top: 1px solid ${grayColor};
  padding-top: 30px;
}
.article-single .grid .secondary-content .popular-articles {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
}
.article-single .grid .secondary-content .popular-articles a {
  color: ${primaryColor};
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 15px;
  padding: 15px 0;
  border-bottom: 1px solid ${grayColor};
  transition: ease-in-out 0.2s;
}
.article-single .grid .secondary-content .popular-articles a:hover {
  color: ${blackColor};
}
.article-single .grid .secondary-content .popular-articles a .thumb {
  display: inline-block;
  width: 50px;
  height: 50px;
}
.article-single .grid .secondary-content .popular-articles a .thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 2px;
}
.article-single .grid .secondary-content .social {
  margin: 30px 0;
  padding: 60px 30px;
  background-color: ${primaryColor};
  color: ${lightColor};
  text-align: center;
}
.article-single .grid .secondary-content .social a {
  font-size: 3rem;
  margin: 0 5px;
  opacity: 0.8;
  transition: ease-in-out 0.2s;
}
.article-single .grid .secondary-content .social a:hover {
  opacity: 1;
}
.article-single .grid .secondary-content .ads {
  text-align: center;
}
.article-single .grid .secondary-content .ads img {
  margin: 0 auto;
}

@media screen and (min-width: 1024px) {
  .article-single .grid {
    grid-template-columns: 2fr 1fr;
    gap: 30px;
  }
  .article-single .grid .main-content {
    margin-bottom: 0;
  }
  .article-single .grid .secondary-content {
    border-top: none;
    padding-top: 0;
  }
  .article-single .grid .secondary-content .social {
    padding: 40px 30px;
  }
  .article-single .grid .secondary-content .ads img {
    width: 100%;
  }
}
@media screen and (min-width: 1400px) {
  .article-single .grid {
    grid-template-columns: 3fr 1fr;
  }
}

// Magazine ---------------------------------------------------------------------
.magazine-release {
  text-align: center;
}
.magazine-release .grid {
  grid-template-columns: 1fr;
}
.magazine-release .grid .img {
  display: none;
}
.magazine-release .grid .bg-icon {
  top: 0%;
  opacity: 0.05;
  color: ${lightColor};
}

@media screen and (min-width: 768px) {
  .magazine-release {
    text-align: left;
    overflow: visible;
  }
  .magazine-release .grid {
    grid-template-columns: repeat(5, 1fr);
    gap: 15px;
  }
  .magazine-release .grid .bg-icon {
    display: none;
  }
  .magazine-release .grid .content {
    grid-column: 1/4;
  }
  .magazine-release .grid .img {
    display: block;
  }
  .magazine-release .grid .img img {
    position: absolute;
    width: 240px;
    height: auto;
    transform: rotate(15deg) translate(-20px, -60px);
    box-shadow: 5px 5px 20px #00000063;
  }
}
@media screen and (min-width: 1024px) {
  .magazine-release .grid .img img {
    width: 270px;
    transform: rotate(15deg) translate(20px, -120px);
    cursor: pointer;
    transition: ease-in-out 0.2s;
  }
  .magazine-release .grid .img img:hover {
    transform: rotate(15deg) translate(20px, -120px) scale(1.02);
    box-shadow: 5px 5px 20px #00000080;
  }
}
@media screen and (min-width: 1400px) {
  .magazine-release .grid .img img {
    width: 300px;
    transform: rotate(15deg) translate(40px, -130px);
  }
  .magazine-release .grid .img img:hover {
    transform: rotate(15deg) translate(40px, -130px) scale(1.02);
    box-shadow: 5px 5px 20px #00000080;
  }
}
.magazine-grid {
  text-align: center;
}
.magazine-grid .grid {
  grid-template-columns: 1fr;
  gap: 30px;
  justify-content: center;
  align-items: center;
}
.magazine-grid .grid .item {
  width: 100%;
  overflow: hidden;
  padding: 15px 0;
}
.magazine-grid .grid .item img {
  width: 100%;
  height: auto;
  margin-bottom: 15px;
}
.magazine-grid .grid .item h6 {
  margin: 0;
  color: ${primaryColor};
}

@media screen and (min-width: 768px) {
  .magazine-grid .grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
  }
  .magazine-grid .grid .item img {
    margin-bottom: 5px;
  }
}
@media screen and (min-width: 1024px) {
  .magazine-grid .grid {
    gap: 30px;
  }
}
@media screen and (min-width: 1200px) {
  .magazine-grid .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

// Ads ---------------------------------------------------------------------
.ads .flex {
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
}
.ads .flex a {
  width: 100%;
}
.ads .flex a img {
  width: 100%;
  border: 1px solid ${grayColor};
}

@media screen and (min-width: 768px) {
  .ads .flex {
    flex-direction: row;
    justify-content: center;
  }
  .ads .flex a {
    width: 250px;
    height: auto;
  }
}
@media screen and (min-width: 1200px) {
  .ads .flex a {
    width: 300px;
  }
}

// Bottom ---------------------------------------------------------------------
.bottom {
  background-color: ${blackColor};
  color: ${lightColor};
  text-align: center;
}
.bottom .contact-info-items {
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: center;
  margin-bottom: 3rem;
}
.bottom .contact-info-items a {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.bottom .contact-info-items a .icon {
  font-size: 1.5rem;
  color: ${secondaryColor};
}

@media screen and (min-width: 768px) {
  .bottom {
    text-align: left;
  }
  .bottom .contact-info-items {
    flex-direction: row;
    justify-content: center;
  }
}
@media screen and (min-width: 1024px) {
  .bottom .contact-info-items {
    flex-direction: column;
    gap: 5px;
    text-align: left;
    margin-bottom: 0;
  }
  .bottom .contact-info-items a {
    flex-direction: row;
    gap: 10px;
  }
}

// Footer ---------------------------------------------------------------------
footer {
  padding: 20px 0;
  background-color: ${footerColor};
  color: ${lightColor};
  text-align: left;
}
footer .flex {
  flex-direction: column;
}
footer .flex a {
  color: ${primaryColor};
}

@media screen and (min-width: 1024px) {
  footer .flex {
    flex-direction: row;
    justify-content: left;
    gap: 1rem;
  }
}

// contact ---------------------------------------------------------------------
.contact {
  background-position: center top;
  color: ${blackColor};
  text-align: center;
}
.contact .flex {
  flex-direction: column;
  gap: 60px;
}
.contact .flex .contact-info .grid {
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(4, auto);
  gap: 15px;
}
.contact .flex .contact-info .grid .box {
  border: 1px solid ${grayColor};
  border-radius: 5px;
  padding: 30px 15px;
  transition: ease-in-out 0.2s;
}
.contact .flex .contact-info .grid .box:hover, .contact .flex .contact-info .grid .box:active {
  background-color: ${lightColor};
}
.contact .flex .contact-info .grid .box .icon {
  font-size: 3rem;
  color: #87a30e;
  width: 100%;
  margin-bottom: 2rem;
}
.contact .flex .contact-info .grid .box p {
  color: ${primaryColor};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  gap: 15px;
}
.contact .flex .join-program > .flex {
  gap: 0;
}
.contact .flex .join-program > .flex .join-img {
  background-image: url(https://res.cloudinary.com/dcqvlh8mo/image/upload/f_auto,q_auto/li7j35d1figh2oam3qbn);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 250px;
  border-radius: 5px;
  margin-bottom: 45px;
}

@media screen and (min-width: 768px) {
  .contact .flex .contact-info .grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
  }
  .contact .flex .contact-info .grid .box:nth-child(1) {
    font-size: 1rem;
  }
}
@media screen and (min-width: 1024px) {
  .contact .flex .contact-info .grid {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
  }
  .contact > .content-wrap > .flex {
    flex-direction: row;
    gap: 30px;
    justify-content: center;
  }
  .contact > .content-wrap > .flex .contact-info .grid {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, auto);
  }
  .contact .flex .join-program > .flex {
    flex-direction: row;
    gap: 1rem;
  }
  .contact .flex .join-program > .flex > div {
    flex-basis: 50%;
    flex-grow: 1;
  }
  .contact > .content-wrap > .flex .join-program > .flex .join-img {
    height: 440px;
    margin-bottom: 60px;
  }
}
@media screen and (min-width: 1200px) {
  .contact > .content-wrap > .flex {
    justify-content: space-between;
  }
  .contact > .content-wrap > .flex .contact-info .grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
  }
  .contact > .content-wrap > .flex .join-program > .flex .join-img {
    height: 180px;
    width: 300px;
    margin: 0 auto;
    margin-bottom: 30px;
  }
}

// Bootstrap override -------------------------------------------------------
.navbar-light .navbar-nav .nav-link:hover, 
.navbar-light .navbar-nav .nav-link:focus {
    background-color: ${grayColor} !important;
    color: ${primaryColor} !important;
}
.navbar-light .navbar-toggler {
  border: none !important;
  outline: none !important;
}
`;

export default GlobalStyles;
