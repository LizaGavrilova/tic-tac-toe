import React, { useState } from 'react';

import { Button, Form, Input } from 'antd';

import { Board } from '../Board'

import { calculateWinner } from '../../calculateWinner';

import './App.scss';

export default function App() {
  const [form] = Form.useForm();
  const [size, setSize] = useState(3);
  const [board, setBoard] = useState(Array(size * size).fill(null));
  const [boardIndex, setBoardIndex] = useState([]);
  const [playerOne, setPlayerOne] = useState('');
  const [playerTwo, setPlayerTwo] = useState('');
  const [xIsNext, setXIsNext] = useState(true);
  const [isCheckButtonSize, setisCheckButtonSize] = useState([true, false, false])

  const winner = calculateWinner(board, size);
  const standoff = (boardIndex.length === board.length && boardIndex.length !== 0);

  const onBoard = (index) => {
    if (playerOne && playerTwo) {
      const boardCopy = [...board];
      const boardIndexCopy = [...boardIndex];
      if (winner || boardCopy[index]) {
        return
      }
      boardCopy[index] = xIsNext ? 'X' : 'O';
      setBoardIndex([...boardIndexCopy, index]);
      setBoard(boardCopy);
      setXIsNext(!xIsNext);
    } else {
      form.submit();
    }
  };

  const onButtonRestart = () => {
    setBoard(Array(size * size).fill(null));
    setBoardIndex([]);
    setPlayerOne('');
    setPlayerTwo('');
  };

  const onButtonCancel = () => {
    if (boardIndex.length !== 0) {
      const boardCopy = [...board];
      const boardIndexCopy = [...boardIndex];
      boardCopy[boardIndexCopy.slice(-1)] = null;
      boardIndexCopy.pop();
      setBoard(boardCopy);
      setBoardIndex([...boardIndexCopy]);
      setXIsNext(!xIsNext);      
    }    
  };

  const onButtonForm = (values) => {
    setPlayerOne(values.name_one);
    setPlayerTwo(values.name_two);
    setBoard(Array(size * size).fill(null));
    setXIsNext(true);
    form.resetFields();
  };

  const onSizeButtonThree = () => {
    setSize(3);
    setisCheckButtonSize([true, false, false]);
    setBoard(Array(9).fill(null));
    setBoardIndex([]);
    setXIsNext(true);
    form.resetFields();
  };

  const onSizeButtonFive = () => {
    setSize(5);
    setisCheckButtonSize([false, true, false]);
    setBoard(Array(25).fill(null));
    setBoardIndex([]);
    setXIsNext(true);
    form.resetFields();
  };

  const onSizeButtonTen = () => {
    setSize(10);
    setisCheckButtonSize([false, false, true]);
    setBoard(Array(100).fill(null));
    setBoardIndex([]);
    setXIsNext(true);
    form.resetFields();
  };

  const queueTitle = (!winner && !standoff) ? <span className='queue'>{(playerOne && playerTwo) ? `Ходит игрок ${(xIsNext) ? playerOne : playerTwo}` : ``}</span> : null;
  const winnerTitle = (winner) ? <span className='winner'>{`Победитель: ${(!xIsNext) ? playerOne : playerTwo}`}</span> : null;
  const standoffTitle = (!winner && standoff) ? <span className='standoff'>Ничья</span> : null;

  return (
    <div className='wrapper'>
      <span className='header'>Крестики-Нолики</span> 
      <Form
        name="basic"
        className='form'
        form={form}
        onFinish={onButtonForm}
      >
        <span className='form_player'>Игрок 1</span>
        <Form.Item name="name_one" rules={[{ required: true, message: 'Пожалуйста, введите имя' }]}>
          <Input placeholder="Введите имя" />
        </Form.Item>
        <span className='form_player'>Игрок 2</span>
        <Form.Item name="name_two" rules={[{ required: true, message: 'Пожалуйста, введите имя' }]}>
          <Input placeholder="Введите имя" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className='form_button'>
            Ok
          </Button>
        </Form.Item>
      </Form>
      <div className='size_buttons'>
        <button type='button' className={isCheckButtonSize[0] ? 'size_button_active' : 'size_button'} onClick={onSizeButtonThree}>3x3</button>
        <button type='button' className={isCheckButtonSize[1] ? 'size_button_active' : 'size_button'} onClick={onSizeButtonFive}>5x5</button>
        <button type='button' className={isCheckButtonSize[2] ? 'size_button_active' : 'size_button'} onClick={onSizeButtonTen}>10x10</button>
      </div>      
      {queueTitle}
      {winnerTitle}
      {standoffTitle}
      <Board size={size} squares={board} click={onBoard}/>
      <div className='buttons'>
        <button type='button' className='cancel_button' onClick={onButtonCancel}>Отменить ход</button>
        <button type='button' className='restart_button' onClick={onButtonRestart}>Начать заново</button>
      </div>      
    </div>       
  );
};
