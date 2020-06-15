import React from 'react';

const App = function() {
  const profiles = [
    {name: "Taro", age: 10},
    {name: "Hanako", age: 5},
    {name: "Noname"}
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

const User = (props) => {
return <div>Hi!{props.name}and {props.age}</div>
}

const Post = function(props) {
return <div>タイトル：{props.title} 値段：{props.price}</div>
}
// propsが渡っていない場合でも、デフォルトで設定する
User.defaultProps = {
  age: 1
}

export default App;
