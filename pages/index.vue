<template>
  <div>
    <Navbar />
    <HistoricalPath />
    <SearchedResult />
    <FilterModal />
  </div>
</template>

<script>
  import Navbar from '../components/Navbar';
  import HistoricalPath from '../components/HistoricalPath';
  import SearchedResult from '../components/SearchedResult';
  import FilterModal from '../components/FilterModal';

  export default {
    components: { 
      Navbar,
      HistoricalPath,
      SearchedResult,
      FilterModal
    }
  }
</script>