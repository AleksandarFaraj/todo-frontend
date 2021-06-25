import React, { useEffect } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from "react-router-dom";
import { useSWRInfinite } from "swr";
import { EmojiIconComponent } from "~/src/components/EmojiIconComponent";
import { fetcher } from "~/src/util/fetcher";
import { useSearchBar } from "./SearchBarContext";
const DEFAULT_FETCH_SIZE = 10;
export const SearchResult: React.FunctionComponent<{}> = () => {
    const { searchingFor } = useSearchBar();
    const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite<Todos[]>(
        (index, prev) => {
            if (prev && !prev.length) return null;
            return `/todos/?q=${searchingFor}&limit=${DEFAULT_FETCH_SIZE}&page=${index + 1}`
        },
        fetcher
    )
    if (!data) {
        return <>Waiting for data</>;
    }
    useTriggerScrollFix([data.length])
    const todos: Todo[] = data.flat(2)
    if (todos.length === 0) {
        return <div className="text-center w-full"><span >No results to be found! Tip: search for secret</span></div>;
    }
    console.log(todos.length)

    return (
        <div>
            <div className="flex flex-col">
                <InfiniteScroll
                    dataLength={todos.length} //This is important field to render the next data
                    next={() => setSize(size + 1)}
                    hasMore={data[data.length - 1].length > 0}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <p className="text-center">
                            No more results
                        </p>
                    }
                    // below props only if you need pull down functionality
                    refreshFunction={() => setSize(size + 1)}
                    pullDownToRefresh
                    pullDownToRefreshThreshold={50}
                    pullDownToRefreshContent={
                        <h3 className="text-center">&#8595; Pull down to refresh</h3>
                    }
                    releaseToRefreshContent={
                        <h3 className="text-center">&#8593; Release to refresh</h3>
                    }
                >
                    {todos.map(todo => <div key={todo.id} className="m-8">
                        <Link to={`/todos/${todo.id}`}><EmojiIconComponent className="mr-4" todo_type={todo.todo_type} /> <span>{todo.title}</span></Link>
                    </div>)}
                </InfiniteScroll>
            </div>
        </div>
    )
}


function useTriggerScrollFix(deps?: React.DependencyList) {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('scroll'));
        }
    }, deps);
}