import React from 'react';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button,Modal,Label } from 'react-bootstrap';
import Select from 'react-select';
import Toggle from 'react-toggle';
require('../../../scss/style.scss');
require('../../../scss/react-toggle.scss');
import * as types from '../../containers/account/actions/accountActionTypes';

class HubAccountModifyMTRouting extends React.Component {
  constructor(props, context) {
      super(props, context);

        this.state={
            ModifyFlag : '',
              MTModifyInfo : this.props.MTModifyInfo || [],
             modalHeading:'Modify standard MT routing',

             checked : false,
             commentchecked : false,
              smscmodify : true,


        }
  }

  handleModalChange(target, value){
    debugger;
    var modify = this.state.MTModifyInfo;
    switch(target) {
      // case types.ACCOUNT_MT_ROUTING_OPERATOR:
      //   modify.operator=value.target.value;
      //   break;
      // case types.ACCOUNT_MT_ROUTING_SMSC:
      //  modify.prevsmsc=value.target.value;
      //   break;
      case types.ACCOUNT_MODIFY_MT_ROUTING_SMSC:
        modify.smsc=value.value;
        modify.prevsmsc=this.props.MTInfo.smsc;
        modify.operator=this.props.MTInfo.operator;
        break;
      case types.ACCOUNT_MODFIY_MT_ROUTING_ONOFF:
        modify.onoff=value;
        break;
      case types.ACCOUNT_MODIFY_MT_ROUTING_PERMANENT:
        modify.permanent=value;
        break;
      case types.ACCOUNT_MODIFY_MT_ROUTING_TPOA :
        modify.tpoa=value.target.value;
        break;
      case types.ACCOUNT_MODIFY_MT_ROUTING_STARTTIME :
        modify.starttime=value.value;
        break;
      case types.ACCOUNT_MODIFY_MT_ROUTING_COMMENT :
        modify.comment=value.target.value;
    }
    this.setState({MTModifyInfo : modify});
  }

  saveMTRouting(){


      console.log("Modified Routing : " , this.state.MTModifyInfo);
        this.props.close();
  }

  toggleOnChange(event){
    console.log( event.target.checked );
    var _resRouting=event.target.checked==true?"Yes":"No";
    var modify = this.state.MTModifyInfo;
     switch(event.target.name) {

       case "onOffToggle":
        modify.onOffValue = event.target.checked==true?"On":"Off";
         break;
        case "permanentToggle":
        modify.permanentValue = event.target.checked==true?"Yes":"No";
          break;
     }
     this.setState({
        resRouting: _resRouting,
        MTModifyInfo: modify
      });

  }

  close() {

    this.props.close();
  }


  render(){
    debugger;
    const starttime = [
      { value : '1' , label : '1'},
      { value : '2' , label : '2'}
    ];

    const modalOptions = [
      { value: 'one', label: 'One' },
      { value: 'two', label: 'Two' }
    ];

    const changed = function (e) {
        switch (e.target.name) {
          case "smscCheck":
            this.setState({checked : !this.state.checked});
            break;
          case "commentCheck":
            this.setState({commentchecked : !this.state.commentchecked});
            break;

        }

    };

    return (
      <Modal show={this.props.ModifyModalFlag} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
              <Modal.Title>{this.state.modalHeading}</Modal.Title>
          </Modal.Header>
            <Modal.Body>
              <div>
                <Grid fluid={true}>
                  <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 3 }>
                        Operator:
                      </Col>
                      <Col md={ 6 }>
                      <FormControl
                         type="label"
                         name="operator"
                         value={this.props.MTInfo.operator}
                          onChange={changed.bind(this) }
                        />
                      </Col>
                      <Col mdHidden md={ 3 } />
                  </Row>
                  <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 3 }>
                        SMSC:
                      </Col>
                      <Col md={ 6 }>
                      <FormControl
                         type="label"
                         name="prevsmsc"
                         value={this.props.MTInfo.smsc}
                       onChange={changed.bind(this) }
                        />
                      </Col>
                      <Col mdHidden md={ 3 } />
                  </Row>
                  <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 3 }>
                        Preferences:
                      </Col>
                      <Col md={ 2 }>
                      <FormControl
                         type="text"

                        />
                      </Col>
                      <Col mdHidden md={ 3 } />
                  </Row>
                  <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 3 }>
                        SMSC:
                      </Col>
                      <Col md={ 6 }>
                        <Select
                              name="smsc"
                              placeholder="Select SMSC.."
                              options={modalOptions}
                              value={this.state.MTModifyInfo.smsc || ''}
                              onChange={this.handleModalChange.bind(this,types.ACCOUNT_MODIFY_MT_ROUTING_SMSC)}
                               />
                               <label><input type="checkbox"
                                  name="smscCheck"
                                  checked={this.state.checked}
                                  onChange={changed.bind(this) }
                               />Update SMSC
                              </label>
                      </Col>
                      <Col mdHidden md={ 3 } />
                  </Row>
                  <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 3 }>
                        On/Off :
                      </Col>
                      <Col md={ 6 }>
                      <Toggle
                      name="onOffToggle"
                      icons={{
                           checked: 'On',
                           unchecked: 'Off',
                         }}
                         defaultChecked={true}
                         value={this.state.MTModifyInfo.onOffValue}
                        onChange={this.toggleOnChange.bind(this)} />
                      </Col>
                      <Col mdHidden md={ 3 } />
                  </Row>
                  <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 3 }>
                        Permanent :
                      </Col>
                      <Col md={ 6 }>
                      <Toggle
                       name="permanentToggle"
                      icons={{
                           checked: 'Yes',
                           unchecked: 'No',
                         }}
                         defaultChecked={false}
                       value={this.state.MTModifyInfo.permanentValue}
                        onChange={this.toggleOnChange.bind(this)} />
                      </Col>
                      <Col mdHidden md={ 3 } />
                  </Row>
                  <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 3 }>
                        TPOA :
                      </Col>
                      <Col md={ 6 }>
                        <FormControl
                           type="text"
                           name="tpoa"
                           value={this.state.MTModifyInfo.tpoa || ' '}
                           onChange={this.handleModalChange.bind(this,types.ACCOUNT_MODIFY_MT_ROUTING_TPOA)}
                           placeholder="Enter TPOA" />
                      </Col>
                      <Col mdHidden md={ 3 } />
                  </Row>
                  <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 3 }>
                        Comment :
                      </Col>
                      <Col md={ 6 }>
                        <FormControl
                           type="text"
                           name="comment"
                           value={this.state.MTModifyInfo.comment || ' '}
                          onChange={this.handleModalChange.bind(this,types.ACCOUNT_MODIFY_MT_ROUTING_COMMENT)}
                           placeholder="Enter Comment" />
                           <label><input type="checkbox"
                              name="commentCheck"
                              checked={this.state.commentchecked}
                              onChange={changed.bind(this) }
                           />Update comment
                          </label>
                      </Col>
                      <Col mdHidden md={ 3 } />
                  </Row>
                  <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 4 }>
                      Start Time(UTC) :
                      </Col>
                      <Col md={ 2 }>

                      </Col>

                      <Col mdHidden md={ 3 } />
                  </Row>
                  <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 3 }>
                        End Time(UTC) :
                      </Col>
                      <Col md={ 3 }>

                      </Col>
                      <Col mdHidden md={ 3 } />
                  </Row>
                </Grid>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.saveMTRouting.bind(this)}>Save</Button>
              <Button onClick={this.close.bind(this)}>Close</Button>
            </Modal.Footer>
      </Modal>
    );
  }

}

export default HubAccountModifyMTRouting;
