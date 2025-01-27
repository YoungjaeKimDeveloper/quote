import React, { useState } from "react";
import { Image } from "lucide-react";
import Input from "../components/Input";
import Category from "../components/Category";
import { useQuoteStore } from "../../store/quote.store";
import { LoaderCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CreateCategory from "../components/CreateCategory";

const CreatePage = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { createQuote_Error_message, createQuote, creatingQuoteLoading } =
    useQuoteStore();
  const handleCreateNewquote = async (e) => {
    e.preventDefault();
    if (newQuote.author.length < 2 || newQuote.author.length > 11) {
      setErrorMessage("제작자 이름은 최소 2글자 최대 10글자로 작성해주세요 ❤️");
      return;
    }
    if (newQuote.content.length < 5 || newQuote.content.length > 51) {
      setErrorMessage("내용은 최소 5글자 최대 50 글자로 작성해주세요  ⭐️");
      return;
    }
    if (!newQuote.image) {
      setErrorMessage("이미지를 첨부해주세요❗️");
      return;
    }
    if (newQuote.category == "") {
      setErrorMessage("카테고리를 선택해주세요 ✌️");
      return;
    }

    await createQuote(newQuote);
    setNewQuote({
      author: "",
      content: "",
      category: "",
      image: "",
    });
    setErrorMessage(""); // 에러메세지 초기화
    setTimeout(() => {
      navigate("/");
    }, [2000]);
  };
  // Quote 생성기
  const [newQuote, setNewQuote] = useState({
    author: "",
    content: "",
    category: "",
    image: "",
  });
  // Tester
  // 최대한 Variable하게 해줘야함
  const handleInputChange = (target, value) => {
    setNewQuote((preQuote) => ({
      ...preQuote,
      [target]: value,
    }));
  };
  // 이미지 필드
  const handleImageChange = (event) => {
    const file = event.target.files[0]; //맨 마지막 파일 읽기
    if (file) {
      const reader = new FileReader(); // 파일 리더기 객체
      reader.onloadend = () => {
        // 이미지 URL 저장
        setNewQuote((preQuote) => ({
          ...preQuote,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(file); // 파일을 data URL (base64 문자열로 읽기)
    }
  };
  console.log(newQuote, "뉴쿼트");
  const navigate = useNavigate();
  return (
    <div className=" mt-10 lg:mt-30">
      <form className="flex flex-col  items-center justify-center gap-y-10">
        <Input
          text="작가"
          placeholder="Author"
          target="author"
          newQuote={newQuote.author}
          value={newQuote.author}
          handleInputChange={handleInputChange}
        />
        <Input
          text="내용"
          placeholder="오늘 하지 않으면 내일은 없다"
          target="content"
          newQuote={newQuote.content}
          value={newQuote.content}
          handleInputChange={handleInputChange}
        />
        <label htmlFor="image">
          <input type="file" id="image" hidden onChange={handleImageChange} />
          {newQuote.image ? (
            <img
              src={newQuote.image}
              alt="Preview"
              className="mt-4 w-32 h-32 object-cover rounded-2xl"
            />
          ) : (
            <Image
              size="40"
              className="duration-1000 hover:stroke-yellow-300 cursor-pointer"
            />
          )}
        </label>

        <CreateCategory
          selectedCategory={newQuote.category}
          setNewQuote={setNewQuote}
          setCategory={(category) => handleInputChange("category", category)}
        />

        <p className="fon,t-bold text-black ">
          {errorMessage && (
            <p>
              <span className="font-bold">메세지</span>: {errorMessage}
            </p>
          )}
        </p>
        {/* <p>{createQuote_Error_message && Hello}</p> */}
        <button
          className="mt-5 w-1/2 p-4 rounded-2xl opacity-75 bg-white cursor-pointer duration-1000 hover:opacity-100 font-serif mb-2 text-center flex items-center justify-center"
          type="submit"
          onClick={handleCreateNewquote}
          disabled={creatingQuoteLoading}
        >
          {creatingQuoteLoading ? (
            <LoaderCircle className="animate-spin" />
          ) : (
            "명언 제작하기"
          )}
        </button>
      </form>
    </div>
  );
};

export default CreatePage;
