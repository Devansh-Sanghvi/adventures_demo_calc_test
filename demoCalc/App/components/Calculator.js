import Button from './common/Button';
import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import {setValue,setPreviousValue,setSelectedSymbol} from '../actions'
import { connect } from 'react-redux';

const inputButtons = [
    [1, 2, 3, '/'],
    [4, 5, 6, '*'],
    [7, 8, 9, '-'],
    [0, '.', '=', '+']
];



class Calculator extends Component {


  constructor(props) {
        super(props);

        this.state = {
            previousInputValue: 0,
            inputValue: 0,
            selectedSymbol: null
        }
    }




    handleStringInput(str) {
         switch (str) {
             case '/':
             case '*':
             case '+':
             case '-':

this.props.setValue(0);
this.props.setPreviousValue(this.props.value);
this.props.setSelectedSymbol(str);


                 break;
                 case '=':
                               let symbol = this.props.selectedSymbol,
                                   inputValue = this.props.value,
                                   previousInputValue = this.props.previousValue,
                                   result=0;

                               if (!symbol) {
                                   return;
                               }


                               switch (symbol) {
                                   case '/':
                                 result=previousInputValue/inputValue
                                    break;

                                   case '*':
                                   result=inputValue*previousInputValue
                                      break;

                                   case '+':
                                   result=inputValue+previousInputValue
                                     break;
                                   case '-':
                                   result=previousInputValue-inputValue
                                      break;
                                 }






                               this.props.setValue(result);
                               this.props.setPreviousValue(0);
                               this.props.setSelectedSymbol(null);


                               break;

         }
     }

     onInputButtonPressed(input) {


            switch (typeof input) {
                case 'number':
                    return this.handleNumberInput(input)
                case 'string':
                    return this.handleStringInput(input)
            }
        }


        handleNumberInput(num) {
        let inputValue = (this.props.value* 10) + num;

     this.props.setValue(inputValue);
    }
     /**


      * For each row in `inputButtons`, create a row View and add create an InputButton for each input in the row.
      */
     renderInputButtons() {
         let views = [];

         for (var r = 0; r < inputButtons.length; r ++) {
             let row = inputButtons[r];

             let inputRow = [];
             for (var i = 0; i < row.length; i ++) {
                 let input = row[i];

                 inputRow.push(
                     <Button value={input} key={r + "-" + i} onPress={this.onInputButtonPressed.bind(this, input)} />
                 );
             }

             views.push(<View style={Style.inputRow} key={"row-" + r}>{inputRow}</View>)
         }

         return views;
     }





    render() {
        return (
            <View style={Style.rootContainer}>
                <View style={Style.displayContainer}>
                <Text style={{color:'white',fontSize:38,flex:0.5,textAlign:'right',fontWeight:'bold',padding: 20,top:65}}>{this.props.value}</Text>
                 </View>
                <View style={Style.inputContainer}>
                    {this.renderInputButtons()}
                </View>
            </View>
        )
    }


}



var Style = StyleSheet.create({
    rootContainer: {
        flex: 1
    },
    displayContainer: {
        flex: 3,
        backgroundColor: '#a8a8a8',
        justifyContent:'center'
    },

    inputContainer: {
        flex: 7,
        backgroundColor: '#373737'
    },
    inputRow: {
           flex: 1,
           flexDirection: 'row'
       }

});

const mapStateToProps = ({calculator}) => {
  const { value,previousValue,selectedSymbol } = calculator;

  return {value,previousValue,selectedSymbol};
};



export default connect(mapStateToProps,{setValue,setPreviousValue,setSelectedSymbol})(Calculator);
