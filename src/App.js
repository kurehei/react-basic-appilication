import React from 'react';
import PropTypes from 'prop-types';

const App = function() {
  const profiles = [
    {name: "Taro", age: 10},
    {name: "Hanako", age: 5},
    {name: "Noname", age: 2}
  ];

  const data = [
    {title: "Java", price: 2000},
    {title: "PHP", price: 4000}
  ];
  return <div>
            {
              // javascriptのコード
              profiles.map((profile, i) => {
                return <User name={profile.name} age = {profile.age} key={i}/>
              })
            }
            {
              data.map((element, i) =>{
                return <Post title = {element.title} price = {element.price} key={i}/>
              })
            }
          </div>
  }
// const Exemple = () { 関数コンポーネント
  // return <div></div>
//}
/*
const App = () {
  return(
    <div>Exemple</div>
  )
}
*/
const User = (props) => {
return <div>Hi!{props.name}and {props.age}</div>
}

const Post = function(props) {
return <div>タイトル：{props.title} 値段：{props.price}</div>
}
// propsが渡っていない場合でも、デフォルトで設定する
// propsの型チェックを行う
User.propTypes = {
  name: PropTypes.string,
  // isRequiredは値が無い場合エラー
  age: PropTypes.number.isRequired
}

export default App;
