import React, {Component} from 'react';
import './css/main.css';
import img01 from './image/1.jpg';
import img02 from './image/2.jpg';

const post_one = {
    image:img01,
    title: 'HƯỚNG DẪN HỌC REACT JS',
    namepost: 'Nguyễn Nhân1',
    content: 'Hướng dẫn học React Js sao cho hiệu quả! Nếu bạn mới làm quen với React (hoặc phần front-end nói chung) thì bạn sẽ thấy hệ sinh thái tương đối…'
};
const post_two = {
    image: img02,
    title: 'HƯỚNG DẪN CẤU TRÚC THƯ MỤC VÀ CÁCH VIẾT COMPONENT CHUẨN TRONG REACT',
    namepost: 'Nguyễn Nhân2',
    content: 'Sau một thời gian tìm hiểu và áp dụng rất hiệu quả, hôm nay mình chia sẻ với các bạn cấu trúc thư mục và cách viết component chuẩn trong React.…'
};
class Main extends Component {
    render() {
        return(
            <div className="Main">
            	<h1 className="Title-Main-Post">SERIES REACT JS: TỪ CƠ BẢN ĐẾN NÂNG CAO</h1>
               	<MainPost_one/>
               	<MainPost_two/>        
            </div>
        )
    }
}
function PostInfo(props){
  return(
    <div className="post">
    		<div className="Thumbnail">
            	<img src={props.image}></img>
            </div>
            <div className="post-noidung">
            	<div className="tieude-post">
                	<h2>{props.title}</h2>
            	</div>
            	<div className="author-post">
                	<h2>{props.namepost}</h2>
            	</div>
            	<div className="noidung-post">
                	<h2>{props.content}</h2>
            	</div>   
                <button id="read">READ MORE</button>
        	</div>
    </div>
  )
};
function MainPost_one(){
  return(
    <div className="mainpost_one">
      <PostInfo image={post_one.image} title={post_one.title} namepost={post_one.namepost} content={post_one.content} />
    </div>
  )
};
function MainPost_two(){
  return(
    <div className="mainpost_two">
      <PostInfo image={post_two.image} title={post_two.title} namepost={post_two.namepost} content={post_two.content} />
    </div>
  )
};
export default Main;