import { useEffect, useState } from "react";
import {
  type TreeDataType,
  type FamilyTreeType,
} from "../../@types/familyTree.type";
import { useFamilyTree } from "../../hook/useFamilyTree";
import { FamilyCard } from "../../UI/Memorial/FamilyCard";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/appStore";
import { AddChildrenCard } from "../../UI/Memorial/AddChildrenCard";
import { InputAndSwitch } from "../../shared/InputAndSwitch";

export const FamilyTree = () => {
  const { getFamilyTree, updateFamilyTree } = useFamilyTree();
  const { accentColor } = useSelector((store: RootState) => store.memorial);
  const { profileImage } = useSelector(
    (store: RootState) => store.memorial.userDetail,
  );
  const [familyData, setFamilyData] = useState<FamilyTreeType>(
    {} as FamilyTreeType,
  );
  const [duplicateData, setDuplicateData] = useState<TreeDataType>(
    {} as TreeDataType,
  );

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFamilyTree();
      setFamilyData(data);
      setDuplicateData(data.treeData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!duplicateData) return;

    updateFamilyTree({ treeData: duplicateData }).then((res) => {
      setFamilyData(res);
    });
  }, [duplicateData]);
  return (
    <>
      <InputAndSwitch<FamilyTreeType, FamilyTreeType>
        data={familyData}
        setData={setFamilyData}
        updateSection={updateFamilyTree}
      />
      {familyData.isActive && (
        <div
          className="py-2 max-xl:overflow-x-auto"
          style={{
            scrollbarColor: accentColor + " transparent",
            scrollbarWidth: "thin",
          }}
        >
          <div className="max-xl:w-300 px-16">
            <div className="flex justify-between items-center whitespace-nowrap">
              <div className="flex items-center">
                <div className="flex items-center">
                  <FamilyCard
                    flag="f_grandFather"
                    data={familyData.treeData.f_grandFather}
                    duplicateData={duplicateData}
                    setDuplicateData={setDuplicateData}
                    setResponse={setFamilyData}
                  />
                  <div
                    className="w-18.75 h-0.5"
                    style={{
                      backgroundColor: accentColor,
                    }}
                  ></div>
                  <div
                    className="h-35.5 w-px relative top-17.5"
                    style={{
                      backgroundColor: accentColor,
                    }}
                  ></div>
                </div>
                <div className="flex items-center">
                  <div
                    className="h-35.5 w-px relative top-17.5"
                    style={{
                      backgroundColor: accentColor,
                    }}
                  ></div>
                  <div
                    className="w-18.75 h-0.5"
                    style={{
                      backgroundColor: accentColor,
                    }}
                  ></div>
                  <FamilyCard
                    flag="f_grandMother"
                    data={familyData.treeData.f_grandMother}
                    duplicateData={duplicateData}
                    setDuplicateData={setDuplicateData}
                    setResponse={setFamilyData}
                  />
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center">
                  <FamilyCard
                    flag="m_grandFather"
                    data={familyData.treeData.m_grandFather}
                    duplicateData={duplicateData}
                    setDuplicateData={setDuplicateData}
                    setResponse={setFamilyData}
                  />
                  <div
                    className="w-18.75 h-0.5"
                    style={{
                      backgroundColor: accentColor,
                    }}
                  ></div>
                  <div
                    className="h-35.5 w-px relative top-17.5"
                    style={{
                      backgroundColor: accentColor,
                    }}
                  ></div>
                </div>
                <div className="flex items-center">
                  <div
                    className="h-35.5 w-px relative top-17.5"
                    style={{
                      backgroundColor: accentColor,
                    }}
                  ></div>
                  <div
                    className="w-18.75 h-0.5"
                    style={{
                      backgroundColor: accentColor,
                    }}
                  ></div>
                  <FamilyCard
                    flag="m_grandFather"
                    data={familyData.treeData.m_grandMother}
                    duplicateData={duplicateData}
                    setDuplicateData={setDuplicateData}
                    setResponse={setFamilyData}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center mt-11.5">
              <div className="flex items-center">
                <FamilyCard
                  flag="father"
                  data={familyData.treeData.father}
                  duplicateData={duplicateData}
                  setDuplicateData={setDuplicateData}
                  setResponse={setFamilyData}
                />
                <div
                  className="w-55.5 h-0.5"
                  style={{
                    backgroundColor: accentColor,
                  }}
                ></div>
                <div
                  className="h-35.5 w-px relative top-17.5"
                  style={{
                    backgroundColor: accentColor,
                  }}
                ></div>
              </div>
              <div className="flex items-center">
                <div
                  className="h-35.5 w-px relative top-17.5"
                  style={{
                    backgroundColor: accentColor,
                  }}
                ></div>
                <div
                  className="w-55.5 h-0.5"
                  style={{
                    backgroundColor: accentColor,
                  }}
                ></div>
                <FamilyCard
                  flag="mother"
                  data={familyData.treeData.mother}
                  duplicateData={duplicateData}
                  setDuplicateData={setDuplicateData}
                  setResponse={setFamilyData}
                />
              </div>
            </div>
            <div className="flex items-center justify-center mt-7 relative">
              {/* myself */}
              <div className="relative flex items-center left-8">
                <MySelfCard image={profileImage} />

                {/* right connection */}
                <div
                  className="w-18.75 h-0.5"
                  style={{ backgroundColor: accentColor }}
                ></div>

                {/* vertical line */}
                <div
                  className="h-35.5 w-px relative top-17.5"
                  style={{ backgroundColor: accentColor }}
                ></div>

                {/* wives */}
                <div className="absolute left-full flex items-center">
                  <div
                    className="h-35.5 w-px relative top-17.5"
                    style={{ backgroundColor: accentColor }}
                  ></div>

                  <div
                    className="w-18.75 h-0.5"
                    style={{ backgroundColor: accentColor }}
                  ></div>

                  <div
                    className="p-2 flex gap-2 max-w-90 overflow-x-auto family-card"
                    style={{
                      borderWidth: 1,
                      borderColor: accentColor,
                      scrollbarColor: accentColor + " transparent",
                      scrollbarWidth: "thin",
                    }}
                  >
                    {familyData.treeData.wifes.map((wife) => {
                      return (
                        <FamilyCard
                          flag="wifes"
                          key={wife?._id}
                          data={wife}
                          duplicateData={duplicateData}
                          setDuplicateData={setDuplicateData}
                          setResponse={setFamilyData}
                        />
                      );
                    })}
                    <AddChildrenCard
                      onClick={async () => {
                        const newData = {
                          ...duplicateData,
                          wifes: [
                            ...duplicateData.wifes,
                            {
                              name: "full name",
                              img: "https://static.vecteezy.com/system/resources/previews/018/765/757/original/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg",
                            },
                          ],
                        };

                        setDuplicateData(newData);

                        const response = await updateFamilyTree({
                          treeData: newData,
                        });
                        setFamilyData(response);
                      }}
                    />
                  </div>
                </div>

                {/* siblings  */}
                <div className="absolute right-full flex flex-col items-end mr-23 ">
                  <div
                    className="w-42.5 h-0.5 relative left-42"
                    style={{ backgroundColor: accentColor }}
                  ></div>

                  <div
                    className="h-5 w-0.5"
                    style={{ backgroundColor: accentColor }}
                  ></div>

                  <div
                    className="relative left-10 p-2 flex gap-2 max-w-90 overflow-x-auto"
                    style={{
                      borderWidth: 1,
                      borderColor: accentColor,
                      scrollbarColor: accentColor + " transparent",
                      scrollbarWidth: "thin",
                    }}
                  >
                    {familyData.treeData.siblings.map((sibling) => {
                      return (
                        <FamilyCard
                          key={sibling?._id}
                          flag="siblings"
                          data={sibling}
                          duplicateData={duplicateData}
                          setDuplicateData={setDuplicateData}
                          setResponse={setFamilyData}
                        />
                      );
                    })}
                    <AddChildrenCard
                      onClick={async () => {
                        const newData = {
                          ...duplicateData,
                          siblings: [
                            ...duplicateData.siblings,
                            {
                              name: "full name",
                              img: "https://static.vecteezy.com/system/resources/previews/018/765/757/original/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg",
                            },
                          ],
                        };

                        setDuplicateData(newData);

                        const response = await updateFamilyTree({
                          treeData: newData,
                        });
                        setFamilyData(response);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative left-28 mt-11.5 flex justify-center">
              <div
                className="p-2 flex gap-2 max-w-150 overflow-x-auto family-card"
                style={{
                  borderWidth: 1,
                  borderColor: accentColor,
                  scrollbarColor: accentColor + " transparent",
                  scrollbarWidth: "thin",
                }}
              >
                {familyData.treeData.children.map((child) => {
                  return (
                    <FamilyCard
                      key={child?._id}
                      flag="children"
                      data={child}
                      duplicateData={duplicateData}
                      setDuplicateData={setDuplicateData}
                      setResponse={setFamilyData}
                    />
                  );
                })}
                <AddChildrenCard
                  onClick={async () => {
                    const newData = {
                      ...duplicateData,
                      children: [
                        ...duplicateData.children,
                        {
                          name: "full name",
                          img: "https://static.vecteezy.com/system/resources/previews/018/765/757/original/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg",
                        },
                      ],
                    };

                    setDuplicateData(newData);

                    const response = await updateFamilyTree({
                      treeData: newData,
                    });
                    setFamilyData(response);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

interface MySelfCardProps {
  image: string;
}

const MySelfCard = ({ image }: MySelfCardProps) => {
  const { accentColor } = useSelector((store: RootState) => store.memorial);

  return (
    <div
      style={{
        backgroundColor: accentColor,
      }}
      className="p-2.5 w-35 h-47 flex items-center justify-center"
    >
      <div className="flex flex-col items-center">
        <div className="m-1.5 h-26 w-26 bg-gray-300 p-1 rounded-full overflow-hidden">
          <img className="rounded-full h-24 w-24" src={image} />
        </div>
      </div>
    </div>
  );
};
