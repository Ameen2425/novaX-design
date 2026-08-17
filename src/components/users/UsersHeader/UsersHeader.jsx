import "./UsersHeader.css";

const UsersHeader = ({ search, setSearch, userCount }) => {
  return (
    <>
      <div className="users-header">
        <span>MANAGEMENT CONSOLE</span>
        <h1>User Directory</h1>
        <p>Oversee and manage registered user accounts, details, and permissions.</p>
      </div>

      <div className="users-controls">
        <div className="users-search-wrapper">
          <svg className="users-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>

          <input
            type="text"
            className="users-search-input"
            placeholder="Search users by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {search && (
            <button
              type="button"
              className="users-search-clear"
              onClick={() => setSearch("")}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>

        <div className="users-count-badge">
          <span className="count-dot"></span>
          <strong>{userCount}</strong>
          <span>Users Listed</span>
        </div>
      </div>
    </>
  );
};

export default UsersHeader;
