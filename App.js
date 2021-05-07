import React, { useState } from "react";
import { View, StatusBar, FlatList } from "react-native";
import styled from "styled-components/native";
import AddInput from './components/AddInput';
import TodoList from './components/TodoList'
import Header from './components/Header';
import Empty from './components/Empty'

export default function App() {
  const [data, setData] = useState([]);

  const submitHandler = (value) => {
    setData((prevTodo) => {
      return [
        {
          value: value,
          key: Math.random().toString(),
        },
        ...prevTodo,
      ];
    });
  }

  const deleteItem = (key) =>{
    setData((prevTodo)=>{
      return prevTodo.filter((todo)=> todo.key != key);
    });
  }

    return (
      <ComponentContainer>
        <View>
          <StatusBar barStyle="light-content"
            backgroundColor="midnightblue" />
        </View>

        <View>
          <FlatList
            data={data}
            ListHeaderComponent={()=> <Header />}
            ListEmptyComponent={() => <Empty />}
            keyExtractor={(item)=> item.key}
            renderItem={({ item }) => (
              <TodoList item={item} deleteItem={deleteItem}/>
            )}
          />
          <View>
            <AddInput submitHandler={submitHandler} />
          </View>
        </View>
      </ComponentContainer>
    );
}

const ComponentContainer = styled.View`
  background-color: #4158D0;
  background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;