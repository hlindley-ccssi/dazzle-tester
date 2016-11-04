// var React = require('react');
// var MyData = require('../components/MyData');
// var MyDataContainer = React.createClass({
//
//
//   render: function() {
//     return (
//       <MyData/>
//     )
//   }
// });
//
// module.exports = MyDataContainer;


import React, { Component } from 'react';
import Dashboard, { addWidget } from 'react-dazzle';

import EditBar from '../components/EditBar';
import Container from '../components/container';
import AddWidgetDialog from '../components/AddWidgetDialog';
import CustomFrame from '../components/CustomFrame';
import BarChart from '../components/BarChart';
import LineChart from '../components/LineChart';
import DoughnutChart from '../components/DoughnutChart';
// Your widget. Just another react component.

//import CustomAddWidgetButton from '../components/CustomAddWidgetButton';

// Default styles.
//import 'react-dazzle/lib/style/style.css';

class MyDataContainer extends Component {
  constructor(props) {
      super(props);
      this.state = {
        // Widgets that are available in the dashboard
        widgets: {
          EngineTelemetricsWidget: {
            type: BarChart,
            title: 'Engine',
          },

          PerformanceWidget: {
            type: DoughnutChart,
            title: 'Reactor Temp',
          },
          ShipVitalTelemetricsWidget: {
            type: LineChart,
            title: 'Reactor Telemetrics',
          },
        },
        // Layout of the dashboard
        layout: {
          rows: [{
            columns: [{
              className: 'col-md-12 col-sm-12 col-xs-12',
              widgets: [{key: 'ShipVitalTelemetricsWidget'}],
            }],
          }, {
            columns: [{
              className: 'col-md-8 col-sm-8 col-xs-8',
              widgets: [{key: 'PerformanceWidget'}],
            }, {
              className: 'col-md-4 col-sm-4 col-xs-4',
              widgets: [{key: 'PerformanceWidget'}],
            }],
          }],
        },
        editMode: false,
        isModalOpen: false,
        addWidgetOptions: null,
      };
    }

    /**
     * When a widget is removed, the layout should be set again.
     */
    onRemove = (layout) => {
      this.setState({
        layout: layout,
      });
    }

    /**
     * Adds new widgget.
     */
//      onAdd = (layout, rowIndex, columnIndex) => {
//   // Add another Greetings Widget
//   console.log("layout",layout)
//   console.log("rowIndex",rowIndex)
//   console.log("columnIndex",columnIndex)
//
//   this.setState({
//     layout: addWidget(layout, rowIndex, columnIndex, 'MyData'),
//   });
// }
    onAdd = (layout, rowIndex, columnIndex) => {
      // Open the AddWidget dialog by seting the 'isModalOpen' to true.
      // Also preserve the details such as the layout, rowIndex, and columnIndex  in 'addWidgetOptions'.
      //  This will be used later when user picks a widget to add.
      console.log("on add")
      console.log(layout)
      console.log(rowIndex)
      console.log(columnIndex)

      this.setState({
        isModalOpen: true,
        addWidgetOptions: {
          layout,
          rowIndex,
          columnIndex,
        },
      });
    }

    /**
     * When a widget moved, this will be called. Layout should be given back.
     */
    onMove = (layout) => {
      this.setState({
        layout: layout,
      });
    }

    /**
     * This will be called when user tries to close the modal dialog.
     */
    onRequestClose = () => {
      this.setState({
        isModalOpen: false,
      });
    }

    render() {
      return (
      <Container>
        <AddWidgetDialog widgets={this.state.widgets} isModalOpen={this.state.isModalOpen} onRequestClose={this.onRequestClose} onWidgetSelect={this.handleWidgetSelection}/>

        <EditBar onEdit={this.toggleEdit} />
        <Dashboard
          frameComponent={CustomFrame}
          onRemove={this.onRemove}
          layout={this.state.layout}
          widgets={this.state.widgets}
          editable={this.state.editMode}
          onAdd={this.onAdd}
          //onAddWidget={this.onAddWidget}
          onMove={this.onMove}
          //addWidgetComponent={CustomAddWidgetButton}
          addWidgetComponentText="Add New Widget"
          />

      </Container>
      );
    }

    /**
     * Toggeles edit mode in dashboard.
     */
    toggleEdit = () => {
      this.setState({
        editMode: !this.state.editMode,
      });
    };
    onAddWidget = (layout, rowIndex, columnIndex) => {
      // Add another Greetings Widget
      console.log("onAddWidget")
      this.setState({
        layout: addWidget(layout, rowIndex, columnIndex, 'MyData'),
      });
    }
    /**
     * When user selects a widget from the modal dialog, this will be called.
     * By calling the 'addWidget' method, the widget could be added to the previous requested location.
     */
    handleWidgetSelection = (widgetName) => {
      console.log('handleWidgetSelection')
      const {layout, rowIndex, columnIndex} = this.state.addWidgetOptions;
      console.log("layout",layout)
      console.log("rowIndex",rowIndex)
      console.log("columnIndex",columnIndex)
      console.log("widgetName",widgetName)
      /**
       * 'AddWidget' method gives you the new layout.
       */
      this.setState({
        layout: addWidget(layout, rowIndex, columnIndex, widgetName),
      });

      // Close the dialogbox
      //this.onRequestClose();
    }
  }

module.exports = MyDataContainer;
