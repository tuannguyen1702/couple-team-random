'use client'

import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const MEMBERS = [
  'Team 1',
  'Team 2',
  'Team 3',
  'Team 4',
  'Team 5',
  'Team 6',
  'Team 7',
  'Team 8',
]

interface Pair {
  member1: string
  member2: string
}

export default function Home() {
  const [pairs, setPairs] = useState<Pair[]>([]);
  const [count, setCount] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
        ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  const generatePairs = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;

      if (newCount >= 30) {
        // Dừng interval sau 30 lần
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        return newCount;
      }

      // Tạo cặp mới
      const shuffled = shuffleArray(MEMBERS)
      const newPairs: Pair[] = []

      for (let i = 0; i < shuffled.length; i += 2) {
        if (i + 1 < shuffled.length) {
          newPairs.push({
            member1: shuffled[i],
            member2: shuffled[i + 1],
          })
        }
      }

      setPairs(newPairs)
      return newCount;
    });
  }

  const repeatPairsInterval = () => {
    // Dừng interval cũ nếu có
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Reset count về 0
    setCount(0);

    // Bắt đầu interval mới
    intervalRef.current = setInterval(() => {
      generatePairs();
    }, 100);
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background to-muted/20">
      <Card className="w-full max-w-4xl shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl">🎯 Random Cặp Đấu</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="flex justify-center">
            <Button 
              size="lg"
              onClick={repeatPairsInterval}
            >
              🎲 Random Cặp Đấu
            </Button>
          </div>

          <div className="space-y-6">
            <h2 className="text-center text-3xl font-semibold">Kết quả cặp đấu:</h2>
            <div className="grid gap-5 space-y-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {pairs?.length > 0 && pairs?.map((pair, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "bg-gradient-to-br from-primary to-primary/80 border-0 shadow-md animate-fadeIn rounded-lg border"
                  )}
                >
                  <div className='p-6 flex flex-col items-center justify-center text-center'>
                    <div className="text-sm opacity-90 mb-2.5 font-medium">Cặp {index + 1}</div>
                    <div className="text-xl w-full font-semibold my-2.5 flex items-center justify-center">
                      <span className="flex-1">{pair.member1}</span>
                      <span className="mx-2.5 opacity-80">VS</span>
                      <span className="flex-1">{pair.member2}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

