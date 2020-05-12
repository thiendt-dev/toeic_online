import React, { Component } from 'react';
import Header from '../../../commons/Header/index';
import MdContacts from '../../../../node_modules/react-ionicons/lib/MdContacts';
import MdAddCircle from '../../../../node_modules/react-ionicons/lib/MdAddCircle';
import ListQuestions from './ListQuestions';

class Questions extends Component {
  render() {
    return (
      <div className="my-container wrapper">
        <Header />
        <section className="body">
          <div className="content">
            <div className="content__header">
              <div className="content__icon">
                <MdContacts fontSize="50px" color="#ff950e" />
              </div>
              <p className="content__title">Quản Lý Câu hỏi</p>
            </div>
            <div className="add-new">
              <MdAddCircle fontSize="40px" color="#ff950e" />
              <p className="add-new__text">Thêm Mới</p>
            </div>
          </div>
          <ListQuestions />
        </section>
      </div>
    )
  }
}

export default Questions;