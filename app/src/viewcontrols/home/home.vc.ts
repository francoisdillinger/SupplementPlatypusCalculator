import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context: any = {
        valueOne: <number>null,
        valueTwo: <number>null,
        greeting: 'Please enter a number into each input.',
        answer: ''
    };
    //  This function resets the inputs to empty
    clear(){
         this.context.valueOne = '';
         this.context.valueTwo = '';
     }
    //  This function checks to make sure both inputs have a value in them
    isInputValid(){
        // This puts the contexts in a variable
        let one:string = this.context.valueOne;
        let two:string = this.context.valueTwo;
        // This checks to see if the string value of inputs is empty
        if(one === null || two === null || one === '' || two === ''){
            alert("You need a digit in both inputs you genius!");
            // Returns the boolean false
            // Meaning both inputs having content is false, it cannot run
            return false;
        }
        else{
            // Returns the boolean true
            // Meaning its true that both input are properly filled out
            return true;
        }
    }
    // This function runs when the '+' button is clicked and adds both inputs
    addition(){
        // This checks to make sure inputs have content or will trigger an alert
        // If the returned value is false, it means there are numbers in the inputs and the following code runs
        if (this.isInputValid()) {
                // This parses both inputs from strings into a number
                let one:number = parseInt(this.context.valueOne);
                let two:number = parseInt(this.context.valueTwo);
                let sum = one + two;
                // This sets the 'answer' context to a different string depending on the function being called
                this.context.answer = `Wow! You can add ${one} and ${two} to get a total of ${sum}. Don't you feel smart?`;
                // This calls the 'clear' function which clears both input fields
                this.clear();
        }
    }
    // This function runs when the '-' button is clicked and subtracts both inputs
    subtraction(){
         if (this.isInputValid()) {
                let one = parseInt(this.context.valueOne);
                let two = parseInt(this.context.valueTwo);
                let sum = one - two;
                this.context.answer = `Wow! You can subract ${one} and ${two} to get a total of ${sum}. Aren't you special?`;
                this.clear();
         }
    }
    // This function runs when the '*' button is clicked and multiplies both inputs
    multiplication(){
         if (this.isInputValid()) {
                let one = parseInt(this.context.valueOne);
                let two = parseInt(this.context.valueTwo);
                let sum = one * two;
                this.context.answer = `So you can multiply ${one} and ${two} to get a total of ${sum}. Want a cookie?`;
                this.clear();
         }
    }
    // This function runs when the '/' button is clicked and divides both inputs
    division(){
         if (this.isInputValid()) {
                let one = parseInt(this.context.valueOne);
                let two = parseInt(this.context.valueTwo);
                    // This checks to make sure the second number isn't 0, since you can't divide by 0
                    if(two === 0){
                        // If it is then it triggers this message
                        this.context.answer = 'You can\'t divide a number by zero! Try again!';
                    }
                    // Else it runs the rest of the code
                    else{
                        let sum = one / two;
                        this.context.answer = `You finally learned to divide ${one} by ${two} to get a total of ${sum}. I'm still not impressed.`;
                        this.clear();
                    }
         }
    }
    
}

register.viewControl('home-vc', HomeViewControl);
