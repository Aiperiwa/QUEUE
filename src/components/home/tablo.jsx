import React from 'react';
import './Tablo.css'
import PNG from '../img/Group 41 1.png'

const QueueTable = () => {
  const queueData = [
    { clientNumber: "P1258", operatorNumber: 3 },
    { clientNumber: "D2502", operatorNumber: 1 },
    { clientNumber: "P2589", operatorNumber: 2 },
    { clientNumberWait: "YT236", operatorNumberWait: 3 },
    { clientNumberWait: "D8523", operatorNumberWait: 1 },
    { clientNumberWait: "N1558", operatorNumberWait: 2 },
    // Добавьте дополнительные данные очереди по мере необходимости
  ];

  return (
    <div className='container'>

    <div className='first_box'>
    <table>
      <thead>
        <tr>
          <th>Клиент</th>
          <th></th>
          <th>Окно</th>
        </tr>
      </thead>
      <tbody>
        {queueData.map((item, index) => (
          <tr key={index}>
            <td>{item.clientNumber}</td>
            <td></td>
            <td>{ item.operatorNumber}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>

    <div className='second_box'>
    <table>
      <thead>
        <tr>
          <th>Ожидающие</th>
        </tr>
      </thead>
      <tbody>
        {queueData.map((item, index) => (
          <tr key={index}>
            <td>{item.clientNumberWait}</td>
            <td> </td>
            <td>{item.operatorNumberWait}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>

    <div>
      <img className='PNG' src={PNG} alt="" />
    </div>
  </div>
    
  );
};

export default QueueTable;
