import React, { useEffect, useState } from 'react'
import StarRating from '../components/StarRating';
import { useNavigate, useParams } from 'react-router-dom'
import { useProduct } from '../hooks/useProduct';
import { FaArrowLeft } from "react-icons/fa";
import ProductDetailSkeleton from '../components/ProductDetailSkeleton';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { product, loading } = useProduct(id);


  if (loading) {
    return <ProductDetailSkeleton />
  }

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8">
      <div className="max-w-7xl mx-auto">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="
            mb-6
            flex
            items-center
            gap-2
            rounded-xl
            border
            border-slate-200
            bg-white
            px-4
            py-2
            text-slate-700
            shadow-sm
            transition-all
            hover:bg-slate-100
          "
        >
          <FaArrowLeft size={18} />
          Back
        </button>

        {/* Main Card */}
        <div
          className="
            rounded-3xl
            bg-white
            shadow-lg
            border
            border-slate-200
            overflow-hidden
          "
        >
          <div className="grid lg:grid-cols-2">

            {/* Left */}
            <div
              className="
                flex
                items-center
                justify-center
                p-8
                lg:p-12
                border-b
                lg:border-b-0
                lg:border-r
                border-slate-200
              "
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="
                  max-h-[450px]
                  object-contain
                  transition-transform
                  duration-300
                  hover:scale-105
                "
              />
            </div>

            {/* Right */}
            <div className="p-8 lg:p-12">

              <h1
                className="
                  text-3xl
                  lg:text-5xl
                  font-bold
                  text-slate-900
                "
              >
                {product.title}
              </h1>

              {/* Price + Rating */}
              <div className="mt-6 flex flex-wrap items-center gap-6">
                <span
                  className="
                    text-4xl
                    font-bold
                    text-slate-900
                  "
                >
                  ${product.price}
                </span>

                <StarRating
                  rating={product.rating}
                  size={18}
                />
              </div>

              {/* Meta */}
              <div className="mt-8 space-y-3">
                <p className="text-slate-700">
                  <span className="font-semibold">
                    Brand:
                  </span>{" "}
                  {product.brand}
                </p>

                <p className="text-slate-700">
                  <span className="font-semibold">
                    Category:
                  </span>{" "}
                  {product.category}
                </p>

                {product.stock && (
                  <p className="text-slate-700">
                    <span className="font-semibold">
                      Stock:
                    </span>{" "}
                    {product.stock}
                  </p>
                )}
              </div>

              {/* Description */}
              <div className="mt-10 border-t pt-8">
                <h2
                  className="
                    text-2xl
                    font-semibold
                    text-slate-900
                    mb-4
                  "
                >
                  Description
                </h2>

                <p
                  className="
                    text-slate-600
                    leading-8
                  "
                >
                  {product.description}
                </p>
              </div>

              {/* Reviews */}
              {product.reviews?.length > 0 && (
                <div className="mt-10 border-t pt-8">
                  <h2
                    className="
                      text-2xl
                      font-semibold
                      mb-6
                    "
                  >
                    Reviews
                  </h2>

                  <div className="space-y-6">
                    {product.reviews.map(
                      (review, index) => (
                        <div
                          key={index}
                          className="
                            border-b
                            border-slate-100
                            pb-4
                          "
                        >
                          <div className="flex items-center gap-4">
                            <p className="font-semibold">
                              {review.reviewerName}
                            </p>

                            <StarRating
                              rating={review.rating}
                              size={14}
                            />
                          </div>

                          <p className="mt-2 text-slate-600">
                            {review.comment}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail