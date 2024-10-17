import React, { Component } from 'react';
import PostListItem from './PostListItem';

export default class PostList extends Component {
    state = {
        items: [
            { id: 1, label: 'Сделать задание', done: false, important: false, like: false },
            { id: 2, label: 'Купить продукты', done: false, important: false, like: false },
            // Добавьте другие элементы, если нужно
        ]
    };

    onToggleDone = (id) => {
        this.setState(({ items }) => {
            const index = items.findIndex(item => item.id === id);
            const oldItem = items[index];
            const newItem = { ...oldItem, done: !oldItem.done }; // Меняем состояние done

            const newItems = [
                ...items.slice(0, index),
                newItem,
                ...items.slice(index + 1)
            ];

            return {
                items: newItems
            };
        });
    }

    render() {
        return (
            <div className="post-list">
                {this.state.items.map(item => (
                    <PostListItem
                        key={item.id}
                        label={item.label}
                        done={item.done}
                        important={item.important}
                        like={item.like}
                        onToggleDone={() => this.onToggleDone(item.id)}
                        /* другие пропсы */
                    />
                ))}
            </div>
        );
    }
}
