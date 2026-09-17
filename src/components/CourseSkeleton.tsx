import React from "react";
import { Skeleton } from "./ui/skeleton";

export function CourseSkeleton() {
  return (
    <div className="pt-20 bg-white" role="status" aria-busy="true">
      {/* 1. HERO + REGISTRATION FORM */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#F1F8FF] via-white to-[#D9EBFF] relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* LEFT SIDE */}
            <div className="lg:col-span-3">
              <Skeleton className="h-12 w-3/4 mb-6" />
              <Skeleton className="h-6 w-5/6 mb-8" />

              <div className="flex flex-wrap gap-3 mb-8">
                <Skeleton className="h-10 w-28 rounded-2xl" />
                <Skeleton className="h-10 w-28 rounded-2xl" />
                <Skeleton className="h-10 w-28 rounded-2xl" />
                <Skeleton className="h-10 w-28 rounded-2xl" />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Skeleton className="h-12 w-40 rounded-2xl" />
                <Skeleton className="h-12 w-44 rounded-2xl" />
              </div>

              <div className="flex items-center gap-6">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-6 w-32" />
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="lg:col-span-2">
              <div className="glass-card rounded-3xl p-8 shadow-2xl">
                <Skeleton className="h-8 w-3/4 mb-6" />

                <div className="space-y-4">
                  <Skeleton className="h-12 w-full rounded-2xl" />
                  <Skeleton className="h-12 w-full rounded-2xl" />
                  <Skeleton className="h-12 w-full rounded-2xl" />
                  <Skeleton className="h-12 w-full rounded-2xl" />
                  <Skeleton className="h-12 w-full rounded-2xl" />
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Skeleton className="h-5 w-24 mb-2" />
                  <Skeleton className="h-10 w-32 mb-4" />
                  <Skeleton className="h-5 w-40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT / KEY OUTCOMES */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <Skeleton className="h-10 w-1/2 mb-6" />
            <Skeleton className="h-5 w-full mb-3" />
            <Skeleton className="h-5 w-11/12 mb-3" />
            <Skeleton className="h-5 w-10/12 mb-8" />

            <div className="bg-[#F1F8FF] rounded-3xl p-8 border-2 border-[#007DFF]/20">
              <Skeleton className="h-8 w-48 mb-6" />
              <div className="grid md:grid-cols-2 gap-4">
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LEARNING OUTCOMES */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#F1F8FF] to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Skeleton className="h-6 w-40 mx-auto mb-4 rounded-full" />
              <Skeleton className="h-10 w-1/2 mx-auto mb-4" />
              <Skeleton className="h-6 w-2/3 mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Skeleton className="h-24 w-full rounded-2xl" />
              <Skeleton className="h-24 w-full rounded-2xl" />
              <Skeleton className="h-24 w-full rounded-2xl" />
              <Skeleton className="h-24 w-full rounded-2xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
