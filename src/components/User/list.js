import { useEffect, useState } from "react";
import { Loading } from "../../services/utils";

import UserTable from "./UserTable/userTable";

import Notification from "../../services/notification";
import api from "../../services/api";

const List = () => {
  const [disabledPagination, setDisabledPagination] = useState(false);
  const [pagination, setPagination] = useState({});
  const [dataList, setDataList] = useState(null);
  const [loading, setLoading] = useState();

  const getDataList = async (page, size, search) => {
    setLoading(true);
    setDisabledPagination(true);

    try {
      const response = await api.get(`/list?page=${page}&size=${size}`);
      const { data } = response;

      setPagination({
        totalCount: data.totalElements,
        page,
        size,
        search,
      });

      if (search) {
        const list = [];
        data.content.forEach((item) => {
          if (item.name.toLowerCase().includes(search.toLowerCase())) {
            list.push(item);
          }
        });
        setDataList(list);
      } else {
        setDataList(data.content);
      }

      setLoading(false);
      setDisabledPagination(false);
    } catch ({ response }) {
      Notification("error", "Request not possible");
    }
  };

  useEffect(() => {
    getDataList(1, 5);
  }, []);

  return dataList ? (
    <div className="list-container">
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

export default List;
