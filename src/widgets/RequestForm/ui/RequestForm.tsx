import React, { useState, useCallback, useEffect } from "react";
import { Button } from "shared/ui/Button";
import Select from "shared/ui/Select";
import { Request } from "entities/request/model/types";
import { Category } from "entities/category/model/types";

interface RequestFormProps {
  onSubmit: (formData: Omit<Request, "id" | "createdAt">) => void;
  initialValues?: Partial<Request>;
}

const RequestForm = ({ onSubmit, initialValues }: RequestFormProps) => {
  const [title, setTitle] = useState(initialValues?.title || "");
  const [description, setDescription] = useState(
    initialValues?.description || "",
  );
  const [category, setCategory] = useState(initialValues?.category || "");

  const categories: Category[] = [
    { id: "1", name: "первая" },
    { id: "2", name: "вторая" },
    { id: "3", name: "третья" },
  ];

  useEffect(() => {
    if (initialValues) {
      setTitle(initialValues.title || "");
      setDescription(initialValues.description || "");
      setCategory(initialValues.category || "");
    }
  }, [initialValues]);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!title || !description || !category) {
        alert("Заполните все поля!");
        return;
      }
      onSubmit({ title, description, category });
      setTitle("");
      setDescription("");
      setCategory("");
    },
    [title, description, category, onSubmit],
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Название:
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Введите название заявки"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Описание:
        </label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          placeholder="Введите описание заявки"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-700"
        >
          Категория:
        </label>
        <Select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          options={categories.map((cat) => ({
            value: cat.id,
            label: cat.name,
          }))}
          required
          placeholder="Выберите категорию"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <Button
        type="submit"
        className="rounded bg-indigo-600 px-4 py-2 font-bold text-white hover:bg-indigo-700"
      >
        Создать задачу
      </Button>
    </form>
  );
};

export default RequestForm;
