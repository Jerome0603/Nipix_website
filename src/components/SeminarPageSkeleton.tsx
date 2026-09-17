import React from "react";
import { Skeleton } from "./ui/skeleton";

export function SeminarsPageSkeleton() {
  return (
    <div className="pt-20 bg-white">

      {/* 🔹 HERO SECTION */}
      <section className="relative h-[400px] flex items-center bg-gradient-to-br from-[#F1F8FF] via-white to-[#D9EBFF] mt-4">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl space-y-6">
            <Skeleton className="h-14 w-2/3" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-5/6" />
          </div>
        </div>
      </section>

      {/* 🔹 SEMINAR GRID */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">

          {/* Heading */}
          <div className="text-center mb-16 space-y-4">
            <Skeleton className="h-8 w-40 mx-auto rounded-full" />
            <Skeleton className="h-10 w-1/3 mx-auto" />
            <Skeleton className="h-5 w-1/2 mx-auto" />
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100"
              >
                {/* Image */}
                <Skeleton className="h-56 w-full rounded-none" />

                {/* Content */}
                <div className="p-6 space-y-4">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />

                  <div className="space-y-2 pt-2">
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-4 w-1/3" />
                  </div>

                  <Skeleton className="h-10 w-full rounded-xl mt-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 BENEFITS SECTION */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#F1F8FF] to-white">
        <div className="container mx-auto px-6 lg:px-12">

          <div className="text-center mb-16 space-y-4">
            <Skeleton className="h-8 w-40 mx-auto rounded-full" />
            <Skeleton className="h-10 w-1/3 mx-auto" />
            <Skeleton className="h-5 w-1/2 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 text-center space-y-4"
              >
                <Skeleton className="h-16 w-16 mx-auto rounded-2xl" />
                <Skeleton className="h-6 w-3/4 mx-auto" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 METRICS SECTION */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="rounded-3xl p-8 text-center space-y-4 border"
              >
                <Skeleton className="h-12 w-24 mx-auto" />
                <Skeleton className="h-4 w-1/2 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
