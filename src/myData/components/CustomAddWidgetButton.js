import React, { PropTypes } from 'react';

// const CustomAddWidgetButton = ({text, onClick}) => {
//   return (
//     <div>
//       <button onClick={onClick}>{text}</button>
//     </div>
//   );
// };

const CustomAddWidgetButton = ({text, onClick}) => {
  //console.log(onClick)
  // const widgetItems = Object.keys(widgets).map((widget, key) => {
  //   return (
  //     <div key={key} className="list-group">
  //       <a href="#" className="list-group-item" onClick={() => onWidgetSelect(widget)}>
  //         <h6 className="list-group-item-heading">{widgets[widget].title}</h6>
  //       </a>
  //     </div>
  //   );
  // });
  return (


       <div >
         <h5>Pick a widget to add</h5>

         <a href="#" className="list-group-item" onClick={() => onAddWidget('ShipVitalTelemetricsWidget')}>ShipVitalTelemetricsWidget</a>
       </div>

  );
};

// CustomAddWidgetButton.propTypes = {
//   widgets: PropTypes.object,
//   isModalOpen: PropTypes.bool,
//   onRequestClose: PropTypes.func,
//   onWidgetSelect: PropTypes.func,
// };

export default CustomAddWidgetButton;
