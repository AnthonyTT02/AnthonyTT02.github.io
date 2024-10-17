import React, {Component} from 'react';

import './search-panel.css'

export default class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
    }

    // Funktsioon otsinguvälja väärtuse uuendamiseks
    onUpdateSearch(e) {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term); // Käivitab otsingu vanemkomponendis
    }

    // Funktsioon renderdamiseks
    render() {
        return (
            <input
                className="form-control search-input"
                type="text"
                placeholder="Otsi kirjete järgi"
                value={this.state.term}
                onChange={this.onUpdateSearch}
            />
        )
    }
}
