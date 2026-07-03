function SearchBar({
    showSearch,
    setShowSearch,
    searchTask,
    setSearchTask,
    searchTasks,
}) {
    return (
        <div className="search-container">
            {!showSearch && (
                <button
                    className="open-search-btn"
                    onClick={() => setShowSearch(true)}
                >
                    🔍
                </button>
            )}

            {showSearch && (
                <div className="search-box">
                    <input
                        type="text"
                        placeholder="Search Task..."
                        value={searchTask}
                        onChange={(e) => {
                            setSearchTask(e.target.value);
                            searchTasks(e.target.value);
                        }}
                        className="search-input"
                    />

                    <button
                        className="search-icon"
                        onClick={searchTasks}
                    >
                        🔍
                    </button>
                </div>
            )}
        </div>
    );
}

export default SearchBar;