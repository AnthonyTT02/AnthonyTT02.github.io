import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { label: 'Lähen Reacti õppima', important: true, like: false, done: false, id: 1 },
                { label: 'See on nii hea', important: false, like: false, done: false, id: 2 },
                { label: 'Ma vajan pausi...', important: false, like: false, done: false, id: 3 }
            ],
            term: '',
            filter: 'all'
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onToggleDone = this.onToggleDone.bind(this);  // Новый обработчик
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
        this.maxId = 4;
    }

    // Функция удаления поста по ID
    deleteItem(id) {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
            return { data: newArr };
        });
    }

    // Функция добавления нового поста
    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            like: false,
            done: false,  // Состояние done по умолчанию
            id: this.maxId++
        };
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return { data: newArr };
        });
    }

    // Функция переключения состояния "important"
    onToggleImportant(id) {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = { ...old, important: !old.important };
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return { data: newArr };
        });
    }

    // Функция переключения состояния "like"
    onToggleLiked(id) {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = { ...old, like: !old.like };
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return { data: newArr };
        });
    }

    
    // Функция переключения состояния "done"
 onToggleDone(id) {
     this.setState(({ data }) => {
         const index = data.findIndex(item => item.id === id);
         const oldItem = data[index];
         const newItem = { ...oldItem, done: !oldItem.done }; // Меняем состояние done

         const newData = [
             ...data.slice(0, index),
             newItem,
             ...data.slice(index + 1)
         ];

         return {
             data: newData
         };
     });
 }

    

    // Функция поиска постов
    searchPost(items, term) {
        if (term.length === 0) {
            return items;
        }
        return items.filter(item => item.label.indexOf(term) > -1);
    }

    // Функция фильтрации постов
    filterPost(items, filter) {
        if (filter === 'like') {
            return items.filter(item => item.like);
        } else {
            return items;
        }
    }

    // Функция обновления поиска
    onUpdateSearch(term) {
        this.setState({ term });
    }

    // Функция выбора фильтра
    onFilterSelect(filter) {
        this.setState({ filter });
    }

    // Функция рендеринга
    render() {
        const { data, term, filter } = this.state;
        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;
        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return (
            <div className="app">
                <AppHeader liked={liked} allPosts={allPosts} />
                <div className="search-panel d-flex">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <PostStatusFilter filter={filter} onFilterSelect={this.onFilterSelect} />
                </div>
                <PostList
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}
                    onToggleDone={this.onToggleDone}  // Передаем обработчик
                />
                <PostAddForm onAdd={this.addItem} />
            </div>
        );
    }
}
