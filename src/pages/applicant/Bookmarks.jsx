import PageHeader from "../../components/common/PageHeader";
import BookmarkFilters from "../../components/bookmarks/BookmarkFilters";
import BookmarkGrid from "../../components/bookmarks/BookmarkGrid";

function Bookmarks() {
  return (
    <>
      <PageHeader
        title="My Bookmarked Jobs"
        subtitle="Save jobs you're interested in and apply later."
      />

      <BookmarkFilters />

      <BookmarkGrid />
    </>
  );
}

export default Bookmarks;
