import React, {Component} from 'react';

import './post-status-filter.css';

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        // Nupud, mida kasutatakse postituste filtreerimiseks
        this.buttons = [
            {name: 'all', label: 'Kõik'},
            {name: 'like', label: 'Meeldis'}
        ];
    }

    // Funktsioon renderdamiseks
    render() {

        // Loob nupud, mille abil saab postitusi filtreerida
        const buttons = this.buttons.map(({name, label}) => {
            const {filter, onFilterSelect} = this.props;
            const active = filter === name;
            const clazz = active ? 'btn-info' : 'btn-outline-secondary';
            return (
                <button type='button'
                    className={`btn ${clazz}`}
                    key={name}
                    onClick={() => onFilterSelect(name)}>
                    {label}</button>
            )
        });

        // Tagastab nupugrupi komponenti renderdatud kujul
        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}
