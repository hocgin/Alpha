import styles from './index.less';
import SearchBar from '../components/SearchBar';
import Toolbar from '../components/Toolbar';
import Card from '../components/Card';
import React from "react";

export default function () {
    return (
        <div className={styles.normal}>
            <div className={styles.toolbar}>
                <Toolbar/>
            </div>
            <div className={styles.header}>
                <div className={styles.search_bar}>
                    <SearchBar/>
                </div>
            </div>
            <div className={styles.body}>
                <div className={styles.site}>
                    <div className={styles.content_container}>
                        <div className={styles.title}>
                            <h3>推荐</h3>
                        </div>
                        {
                            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => {
                                return (
                                    <div className={styles.item}>
                                        <Card/>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
