import React, {Component} from 'react';

import './post-add-form.css'

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    // Funktsioon sisestusvälja väärtuse muutmiseks
    onValueChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    // Funktsioon vormi saatmise käsitlemiseks
    onSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state.text); // Lisab uue postituse
        this.setState({
            text: ''
        });
    }

    // Funktsioon vormi renderdamiseks
    render() {
        return (
            <form
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="Mille kohta te mõtlete praegu?"
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary">
                    Lisada
                    </button>
            </form>
        )
    }
}

