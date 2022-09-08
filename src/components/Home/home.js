import { useEffect, useState } from "react";
import { Loading } from "../../services/utils";

import UserTable from "./UserTable/UserTable";

import Notification from "../../services/notification";
import api from "../../services/api";

const Home = () => {
  const [disabledPagination, setDisabledPagination] = useState(false);
  const [pagination, setPagination] = useState({});
  const [dataList, setDataList] = useState(null);
  const [loading, setLoading] = useState();

  const getDataList = async (page, size, search) => {
    setLoading(true);
    setDisabledPagination(true);

    const params = {
      page,
      size,
    };

    if (search) params.name = search;

    try {
      const response = await api.get("/list");
      const { data } = response;

      setPagination({
        totalCount: data.length,
        page,
        size,
        search,
      });

      setDataList(data);
      setLoading(false);
      setDisabledPagination(false);
    } catch ({ response }) {
      Notification("error", "Request not possible");
    }
  };

  useEffect(() => {
    getDataList();
  }, []);

  return dataList ? (
    <div className="home-container">
      <UserTable
        dataList={dataList}
        getDataList={getDataList}
        pagination={pagination}
        setPagination={setPagination}
        disabledPagination={disabledPagination}
        loading={loading}
        setLoading={setLoading}
      />
    </div>
  ) : (
    <Loading />
  );
};

export default Home;
