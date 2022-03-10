
import React from 'react';
const FooterGranite = ({ material }) => {
  console.log(material)
  // const listsData = text;
  // const listItem = listsData.map((list) => <li>{list}</li>);
  const test = () => {
    if (material % 2 == 1) {
      return (
        <>
            <h2 id={material.buttonHref}></h2>
          <h2 style={{ margin: "20px" }}>{material.name}</h2>
          <div className="row" >
            <div className="col-lg-5 col-md-6 col-xs-12 text-center">
              <img className="w-10" src={material.graniteImg} />
            </div>
            <div className="col-lg-7 col-md-6 col-xs-12">
              <p className="lead">{material.description}</p>
              <h4 style={{ color: "#564200", }}>{material.advantage}</h4>
              <ul style={{ color: "red", fontSize: "15px" }}>
                {material.list.map((item, index) => <div>{`${index}: ${item}`}</div>)}
              </ul>
            </div>
          </div>
        </>
      )
    } else {
      return (
        <>
          <h2 id={material.buttonHref}></h2>
          <h2 style={{ margin: "20px" }}>{material.name}</h2>
          <div className="row" >
            <div className="col-lg-5 col-md-6 col-xs-12 text-center">
              <img className="w-100" src={material.graniteImg} />
            </div>
            <div className="col-lg-7 col-md-6 col-xs-12">
              <p className="lead">{material.description}</p>
              <h4 style={{ color: "#564200", }}>{material.advantage}</h4>
              <ul style={{ color: "red", fontSize: "15px" }}>
                {material.list.map((item, index) => <div>{`${index}: ${item}`}</div>)}
              </ul>
            </div>
          </div>
        </>
      );
    }
  }


  return (
    <>
      {test()}
    </>
  );
};

export default FooterGranite;