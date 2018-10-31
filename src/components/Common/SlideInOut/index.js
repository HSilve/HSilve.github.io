import React, {Component} from 'react';
import SlideInOut from './Slide';
import './styles.css';

const SlideDisplay = ({data, defaultPageDisplay}) => {
   return <div className= "flex-it" style={{marginTop: '10vh'}}>
      <div className= "flex-it">
          <div className="slideIn-titles">
              <SlideInOut
                targetId = "content-slideIn-contact"
                targetGroup = {["slideIn-content", 'sub-group-list']}
                className="slideIn-title">
                <div className="rotate-text">Contact</div>
              </SlideInOut>
              <SlideInOut
                targetId = "section-list"
                className="slideIn-title"
                targetGroup = {["slideIn-content"]}
                >
                <div className="rotate-text">Resume</div>
              </SlideInOut>
          </div>
        <div id="list-wrapper">
          <div id="section-list" className="sub-group-list showHide">
            { displaySubGroup(data)}
          </div>
        </div>
      <div className="displaySpace">
        {/* <div id="content-slideIn-technical-skills" className="slideIn-content showHide">
          <Skills />
        </div> */}
        <div id="content-slideIn-contact" className="slideIn-content showHide visible" style={{paddingTop: '20vh'}}>
          {defaultPageDisplay()}
        </div>
          {displayData(data)}
        </div>
      </div>
    </div>
};

export default SlideDisplay;


const displayData = data => (
  Object.keys(data).map(box => (
      <table
       key={`content-slideIn-${box}`}
       id={`content-slideIn-${box}`}
       className="slideIn-content showHide"
       >
       <tbody>
       {
        data[box].map(row => (
          <tr key={row.heading}>
            <td className="minor-col">
              <b className="title">{row.heading}</b>
              {row.date &&
                <div className="small-text">
                  <i>
                    {row.date}
                  </i>
                </div>
              }
            </td>
            <td className="majof-col">
            <b className="company">{row.subHeading}</b>
              <div className="company">{row.desc}</div>
                <ul className="data">
                  {row.details && row.details.map(item => (
                        <li key={item}>{item}</li>
                      ))
                  }
                </ul>


            </td>
          </tr>
          ))
      }
      </tbody>
     </table>
    ))
);

const displaySubGroup = data => {
  return Object.keys(data).map((dataGroup) => (
    <SlideInOut
      key={dataGroup}
      targetId = {`content-slideIn-${dataGroup}`}
      targetGroup= {['slideIn-content']}
      className="slideIn-subGroup-title"
      >
        {/* <br />
        <i className="material-icons"></i>
        <br /> */}
        {dataGroup}
    </SlideInOut>
    ))
  };
