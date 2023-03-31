import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import useInfiniteScroll from 'react-infinite-scroll-hook';

function fetchData(options = { perPage: 5, page: 1 }, currentValue: any[], apply: Function) {
    apply({ options: {perPage: options.perPage, page: options.page, loading: true, hasNextPage: true, error: false, errorMessage: null}, issues: currentValue});
    fetch(`http://localhost:5001/repos/Altinity/clickhouse-operator/issues?per_page=${options.perPage}&page=${options.page}`)
        .then((response) => response.json())
        .then((responseJson) => {
            apply(
                { options:
                        { perPage: options.perPage, page: options.page + 1, loading: false, hasNextPage: true, error: false, errorMessage: null },
                    issues: [...currentValue, ...responseJson]});
        }).catch((error) => {
            apply(
                { options:
                        { perPage: options.perPage, page: options.page + 1, loading: false, hasNextPage: true, error: true, errorMessage: error.message },
                    issues: currentValue});
        });
}

function listItem(item: { title: string, body: string, state: string }, index: number) {
    return (
        <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
            key={index}
        >
            <div className="ms-2 me-auto">
                <div className="fw-bold">{item.title}</div>
                {item.body ? `${item.body.substring(0, 200)}${item.body.length > 200 ? '...' : ''}` : ''}
            </div>
            <Badge bg="primary" pill>
                {item.state}
            </Badge>
        </ListGroup.Item>
    )
}

export default function App() {
    const [githubIssues, setGitHubIssues] = useState(
        {options: { perPage: 10, page: 1, loading: false, hasNextPage: true, error: false, errorMessage: null} , issues: []});

    useEffect(() => {
        fetchData(githubIssues.options, githubIssues.issues, setGitHubIssues);
    }, []);

    const [sentryRef] = useInfiniteScroll({
        loading: githubIssues.options.loading,
        hasNextPage: githubIssues.options.hasNextPage,
        onLoadMore: () => fetchData(githubIssues.options, githubIssues.issues, setGitHubIssues),
        disabled: githubIssues.options.error,
        rootMargin: '0px 0px 400px 0px',
    });

    return (
        <div className="root">
            <div className="App-header" >
                GitHub Issue Viewer
            </div>
            <div className="App-body">
                <ListGroup as="ol" numbered>
                    {githubIssues.issues.map(listItem)}
                    {(githubIssues.options.loading || githubIssues.options.hasNextPage) && (
                        <ListGroup.Item ref={sentryRef}>
                            {githubIssues.options.error && !!githubIssues.options.errorMessage ?
                                githubIssues.options.errorMessage :
                                "Loading more issues..."}
                        </ListGroup.Item>
                    )}
                </ListGroup>
            </div>
            <div className="App-footer" />
        </div >
    );
};
