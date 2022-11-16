
import { enableRipple } from '@syncfusion/ej2-base';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(true);
class App extends React.Component {
    // Click Event.
    btnClick() {
        window.open("index.html");
    }
    render() {
        return (<div>
                <ButtonComponent cssClass='e-link' onClick={this.btnClick.bind(this)}>Go to google</ButtonComponent>
            </div>);
    }
}
ReactDom.render(<App />, document.getElementById('button'));